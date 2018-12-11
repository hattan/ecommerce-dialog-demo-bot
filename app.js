const {BotFrameworkAdapter, ActivityTypes, ConversationState,MemoryStorage,CardFactory} = require('botbuilder');
const { DialogSet, WaterfallDialog, NumberPrompt, DateTimePrompt, ChoicePrompt, DialogTurnStatus } = require('botbuilder-dialogs');
const BotGreeting = require('botbuilder-greeting');
const cardService = require('./cardService');
const ShopDialog = require('./shopdialog');
const server = require('restify').createServer();

const adapter = new BotFrameworkAdapter({ 
  appId: process.env.MicrosoftAppId, 
  appPassword: process.env.MicrosoftAppPassword 
});


adapter.use(new BotGreeting(async context=>{
  await context.sendActivity({ attachments: [cardService.createAdaptiveCard()] });
}));

const conversationState = new ConversationState(new MemoryStorage());
const shopDialog = new ShopDialog(conversationState);

server.listen(process.env.port || process.env.PORT || 3978, ()=>{
  console.log(`${server.name} listening on ${server.url}`)
});

server.post('/api/messages',async (req,res)=>{
  adapter.processActivity(req,res, async context=>{
    if(context.activity.type === ActivityTypes.Message){
      if(!context.activity.text && context.activity.value && context.activity.value.orderDate){
        await context.sendActivity({ attachments: [cardService.createHistoryCard()] });
      }
      else{
        await shopDialog.onTurn(context);
      }
    }
  });
});
