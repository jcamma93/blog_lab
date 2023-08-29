import * as express from 'express';
import * as Mailgun from 'mailgun.js';
import * as FormData from 'form-data';
import MailGun from 'mailgun.js';
import { mailConfig } from '../../config';
import sms from '../../services/sms';


const mailgun = new (<typeof MailGun>(<any>Mailgun))(<any>FormData).client({
    username: 'api',
    key: mailConfig.api_key!
});


const router = express.Router();

router.post('/sms', async (req, res) => {
    try {
        await sms. sendMeAText("This is a text sent using Trilio!!")
        res.json({ message: "Awesome!  Check your inbox!"})
    } catch (error) {
        res.status(500).json({ message: "Unable to send text message at this time"})
    }
})

router.post('/', async (req, res) => {
    const newEmail = req.body;
    try {
        const result = await mailgun.messages.create(mailConfig.domain!, {
            to: mailConfig.my_email,
            subject: newEmail.subject,
            from: newEmail.from,
            text: newEmail.message
        });
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error sending email' })
    }
});

export default router;



















// import * as express from 'express';
// import mailgun from 'mailgun.js';
// import FormData from 'form-data';
// import { mailConfig } from '../config';

// const mg = new mailgun(FormData).client({ username: 'api', key: mailConfig.api_key! })

// const router = express.Router();

// router.post('/', async (req, res) =>{
//     const { name, from, message } = req.body;

//     try {
//         await mg.messages.create(mailConfig.domain!, {
//             to: mailConfig.my_email,
//             from,
//             subject: 'Contact request from ' + name,
//             html: `<em style='fontSize: 5rem;'>${name}</em> has requested you to contact them at <a href='mailto:${from}'>${from}</a> with the following message for context: ${message}`
//         });
//         res.status(200).json({ message: 'Your email requesting a contact has been sent!' })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Unable to send email at this time.' })
//     }

// });

// export default router;