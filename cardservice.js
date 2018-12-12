const { CardFactory } = require('botbuilder');
class CardService{
  createLaptopResultCard(){
    return CardFactory.adaptiveCard({
      "type": "AdaptiveCard",
      "body": [
          {
              "type": "Container",
              "items": [
                  {
                      "type": "ColumnSet",
                      "columns": [
                          {
                              "type": "Column",
                              "items": [
                                  {
                                      "type": "Image",
                                      "url": "https://mimity-electronics12.netlify.com/img/product/1.jpg",
                                      "size": "Medium"
                                  }
                              ],
                              "width": "auto"
                          },
                          {
                              "type": "Column",
                              "spacing": "Medium",
                              "separator": true,
                              "items": [
                                  {
                                      "type": "Image",
                                      "horizontalAlignment": "Center",
                                      "url": "https://mimity-electronics12.netlify.com/img/product/15.jpg",
                                      "size": "Medium"
                                  }
                                  
                              ],
                              "width": "auto"
                          },
                          {
                              "type": "Column",
                              "spacing": "Medium",
                              "separator": true,
                              "items": [
                                  {
                                      "type": "Image",
                                      "horizontalAlignment": "Center",
                                      "url": "http://adaptivecards.io/content/cats/3.png",
                                      "size": "Medium"
                                  }
                              ],
                              "width": "auto"
                          }
                      ]
                  }
              ]
          }
      ],
      "actions": [
          {
              "type": "Action.OpenUrl",
              "id": "OpenUrl1",
              "title": "Surface Go",
              "url": "https://hattan.io/ecommerce/html/detail.html"
          },     {
              "type": "Action.OpenUrl",
              "id": "OpenUrl1",
              "title": "LG Laptop",
              "url": "https://hattan.io/ecommerce/html/detail.html"
          },     {
              "type": "Action.OpenUrl",
              "id": "OpenUrl1",
              "title": "Ninja Cat",
              "url": "https://hattan.io/ecommerce/html/detail.html"
          }
      ],
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "version": "1.0",
      "speak": "The Seattle Seahawks beat the Carolina Panthers 40-7"
  });
  }

  createHistoryCard(){
    return CardFactory.adaptiveCard({
      "type": "AdaptiveCard",
      "body": [
          {
              "type": "ColumnSet",
              "columns": [
                  {
                      "type": "Column",
                      "items": [
                          {
                              "type": "Image",
                              "url": "https://image.shutterstock.com/image-vector/account-history-line-art-vector-260nw-272851352.jpg",
                              "size": "Small"
                          }
                      ],
                      "width": "auto"
                  },
                  {
                      "type": "Column",
                      "items": [
                          {
                              "type": "TextBlock",
                              "horizontalAlignment": "Right",
                              "text": "mimity",
                              "isSubtle": true
                          },
                          {
                              "type": "TextBlock",
                              "horizontalAlignment": "Right",
                              "spacing": "None",
                              "size": "Large",
                              "color": "Accent",
                              "text": "Order History"
                          }
                      ],
                      "width": "stretch"
                  }
              ]
          },
          {
              "type": "ColumnSet",
              "spacing": "Medium",
              "separator": true,
              "columns": [
                  {
                      "type": "Column",
                      "items": [
                          {
                              "type": "TextBlock",
                              "weight": "Bolder",
                              "text": "Order ",
                              "isSubtle": true
                          },
                          {
                              "type": "TextBlock",
                              "spacing": "Small",
                              "text": "1 Surface Go"
                          },
                          {
                              "type": "TextBlock",
                              "spacing": "Small",
                              "text": "2 Xbox Ones"
                          },
                          {
                              "type": "TextBlock",
                              "spacing": "Small",
                              "text": "15 Licenses for Git"
                          }
                      ],
                      "width": "stretch"
                  },
                  {
                      "type": "Column",
                      "items": [
                          {
                              "type": "TextBlock",
                              "horizontalAlignment": "Right",
                              "weight": "Bolder",
                              "text": "Total",
                              "isSubtle": true
                          },
                          {
                              "type": "TextBlock",
                              "horizontalAlignment": "Right",
                              "spacing": "Small",
                              "text": "$221"
                          },
                          {
                              "type": "TextBlock",
                              "horizontalAlignment": "Right",
                              "spacing": "Small",
                              "text": "$451.00"
                          },
                          {
                              "type": "TextBlock",
                              "horizontalAlignment": "Right",
                              "spacing": "Small",
                              "text": "$0.0"
                          }
                      ],
                      "width": "auto"
                  }
              ]
          }
      ],
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "version": "1.0",
      "speak": "Flight KL0605 to San Fransisco has been delayed.It will not leave until 10:10 AM."
  });
  }
  createAdaptiveCard() {
    return CardFactory.adaptiveCard({
      "type": "AdaptiveCard",
      "body": [
          {
              "type": "Container",
              "items": [
                  {
                      "type": "TextBlock",
                      "size": "Medium",
                      "weight": "Bolder",
                      "text": "Hi there!"
                  },
                  {
                      "type": "ColumnSet",
                      "columns": [
                          {
                              "type": "Column",
                              "items": [
                                  {
                                      "type": "Image",
                                      "style": "Person",
                                      "url": "https://mimity-electronics12.netlify.com/img/logo.svg",
                                      "size": "Small"
                                  }
                              ],
                              "width": "auto"
                          },
                          {
                              "type": "Column",
                              "items": [
                                  {
                                      "type": "TextBlock",
                                      "weight": "Bolder",
                                      "text": "I'm your shopping buddy.",
                                      "wrap": true
                                  }
                              ],
                              "width": "stretch"
                          }
                      ]
                  }
              ]
          },
          {
              "type": "Container",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": "How can I help?",
                      "wrap": true
                  }
              ]
          }
      ],
      "actions": [
          {
            "type": "Action.Submit",
            "title": "Shop",
            "data": "shop"
          },
          {
              "type": "Action.ShowCard",
              "title": "Find Past Order",
              "card": {
                  "type": "AdaptiveCard",
                  "style": "emphasis",
                  "body": [
                      {
                          "type": "TextBlock",
                          "text": "Date of order:"
                      },
                      {
                          "type": "Input.Date",
                          "id": "orderDate",
                          "title": "New Input.Toggle",
                          "value" : "2018-12-12"
                          
                      }
                  ],
                  "actions": [
                      {
                          "type": "Action.Submit",
                          "title": "Find it"
                      }
                  ],
                  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
              }
          }
      ],
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "version": "1.0"
  });
  };
}
  

module.exports = new CardService();

