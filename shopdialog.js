const { ActivityTypes } = require('botbuilder');
const { DialogSet, WaterfallDialog, NumberPrompt, TextPrompt, ChoicePrompt, DialogTurnStatus } = require('botbuilder-dialogs');
const cardService = require('./cardService');

const DIALOG_STATE_ACCESSOR = 'dialogStateAccessor';
const SHOP_ACCESSOR = 'shopAccessor';

const SHOP_DIALOG = 'shopDialog';
const CATEGORY_PROMPT = 'categoryPrompt';
const LOCATION_PROMPT = 'locationPrompt';

module.exports = class ShopDialog{
  constructor(conversationState) {
    this.dialogStateAccessor = conversationState.createProperty(DIALOG_STATE_ACCESSOR);
    this.shopAccessor = conversationState.createProperty(SHOP_ACCESSOR);
    this.conversationState = conversationState;

    this.dialogSet = new DialogSet(this.dialogStateAccessor);
    this.dialogSet.add(new TextPrompt(CATEGORY_PROMPT, this.categoryValidator));
    this.dialogSet.add(new ChoicePrompt (LOCATION_PROMPT));

    this.dialogSet.add(new WaterfallDialog(SHOP_DIALOG, [
      this.promptForCategory.bind(this),
      this.promptForLocation.bind(this),
      this.acknowledgeShopping.bind(this),
   ]));
  }

  async promptForCategory(stepContext) {
    return await stepContext.prompt(
      CATEGORY_PROMPT, {
            prompt: 'what would like to buy?',
            retryPrompt: 'what can I help you find?'
        });
}

async promptForLocation(stepContext) {
  stepContext.values.category = stepContext.result;
    return await stepContext.prompt(
        LOCATION_PROMPT, 'Select a location.', ['Woodland Hills', 'Santa Monica', 'Riverside']
    );
}

async categoryValidator(promptContext) {
  var category = promptContext.recognized.value;
  if (category != "computer" && category != "camera") {
      await promptContext.context.sendActivity(
          'Sorry, we can only currently help with computer and camera sales.');
      return false;
  }
  return true;
}

async acknowledgeShopping(stepContext) {
  const resolution = stepContext.result;
  return await stepContext.endDialog({ location: resolution, category: stepContext.values.category });
}

async onTurn(turnContext) {
    const shopping = await this.shopAccessor.get(turnContext, null);
    const dc = await this.dialogSet.createContext(turnContext);

    if (!dc.activeDialog) {
        if (!shopping) {
            await dc.beginDialog(SHOP_DIALOG);
        }
        else {
          await turnContext.sendActivity({ attachments: [cardService.createAdaptiveCard()] });
        }
    }
    else {
        // Continue the dialog.
        const dialogTurnResult = await dc.continueDialog();

        if (dialogTurnResult.status === DialogTurnStatus.complete) {
            await this.shopAccessor.set(
                turnContext,
                dialogTurnResult.result);

            await turnContext.sendActivity(
                `Here's a listing for ${dialogTurnResult.result.category} in ` +
                `${dialogTurnResult.result.location.value}.`);

            await turnContext.sendActivity({ attachments: [cardService.createLaptopResultCard()] });
        }
    }

    // Save the updated dialog state into the conversation state.
    await this.conversationState.saveChanges(turnContext, false);
}
}
  


