# ps5check

Checks Amazon, Target, and psDirect for an available Playstation 5 console. If it finds one, it sends you a text message at the phone number you've provided a .env file.

The methodology of the app is to search the HTML content of the provided pages for content that appears when the item is out of stock. If it doesn't find that content, it sends you a text message.

## Setup

This app uses Twillio to send text messages. It's pretty easy to get your account started. After you make an account, you can set the following values in your .env file:

```
TWILIO_ACCOUNT_SID = 
TWILIO_AUTH_TOKEN = 
TWILIO_PHONE_NUMBER = 
RECEIVING_PHONE_NUMBER = 
```

It costs $1 to buy a phone number and 1 penny per message. You get something like $15 in free credit when you make an account. (You can get $50 credit with github education)

### Install dependencies

call `npm install` to install the required libraries.

### Run the app

call `npm start` to run the app.




