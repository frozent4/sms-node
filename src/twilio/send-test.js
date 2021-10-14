const config = require("../config");
const client = require("twilio")('AC5256816ca09462355338e0d3295546a5', '');



async function sendMessage() {
    try {
        const message = await client.messages.create({
            to: '+51916090364',
            from: '+12513133444',
            body: 'sms-test',
        });
        console.log(message.sid)
    } catch (error) {
        console.log(error);
    }
}

sendMessage();
console.log('---llegue aca')
