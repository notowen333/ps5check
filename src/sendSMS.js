/**
 * This file sends a message from a twilio number you own (process.env.TWILIO_PHONE_NUMBER)
 * to the phone number you want alerted (process.env.RECEIVING_PHONE_NUMBER)
 * the file is called from the command line as such
 * % node sendSMS.js ${message}
 */

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const message = process.argv[2]; // the message is passed as the third param

client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.RECEIVING_PHONE_NUMBER, })
    .then(message => console.log(message.status));
