import * as twilio from 'twilio';
import { twilioConfig } from '../config';

const client = twilio(twilioConfig.sid, twilioConfig.token);

async function sendMeAText(message: string) {
    return client.messages.create({
        to: '+19738977441',
        from: twilioConfig.number!,
        body: message
    });
};

async function sendYouAText(message: string, phone: string) {
    return client.messages.create({
        to: phone,
        body: message
    });
};

export default {
    sendMeAText,
    sendYouAText
};
