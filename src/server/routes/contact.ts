import * as express from 'express';
import mailgun from 'mailgun.js';
import FormData from 'form-data';
import { mailConfig } from '../config';

const mg = new mailgun(FormData).client({ username: 'api', key: mailConfig.api_key! })

const router = express.Router();

router.post('/', async (req, res) =>{
    const { name, from, message } = req.body;

    try {
        await mg.messages.create(mailConfig.domain!, {
            to: mailConfig.my_email,
            from,
            subject: 'Contact request from ' + name,
            html: `<em style='fontSize: 5rem;'>${name}</em> has requested you to contact them at <a href='mailto:${from}'>${from}</a> with the following message for context: ${message}`
        });
        res.status(200).json({ message: 'Your email requesting a contact has been sent!' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Unable to send email at this time.' })
    }

});

export default router;