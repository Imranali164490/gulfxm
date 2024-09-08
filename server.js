const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'imrandesigner197@gmail.com',
        pass: 'Freel@ncing1234'
    }
});

app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    const mailOptionsToYou = {
        from: 'imrandesigner197@gmail.com',
        to: 'imrandesigner197@gmail.com',
        subject: 'New Newsletter Subscription',
        text: `A new user has subscribed with the email: ${email}`
    };

    const mailOptionsToUser = {
        from: 'imrandesigner197@gmail.com',
        to: email,
        subject: 'Thank you for subscribing!',
        text: 'Thank you for subscribing to our newsletter. Stay tuned for updates!'
    };

    transporter.sendMail(mailOptionsToYou, (error, info) => {
        if (error) {
            return res.status(500).send('Error while sending email to you');
        }
        transporter.sendMail(mailOptionsToUser, (error, info) => {
            if (error) {
                return res.status(500).send('Error while sending email to user');
            }
            res.status(200).send('Subscribed successfully');
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
