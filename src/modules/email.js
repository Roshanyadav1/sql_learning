const nodemailer = require('nodemailer');

const { USER, PASS } = process.env;

const SMTP_CONFIG = 587;
const HOST = 'smtp.gmail.com';

const CC

const SENDER_EMAIL = 'mrroshan738949@gmail.com'
const RECEIVER_EMAIL = 'roshay.bca2020@ssism.org'

const options = {
    from: SENDER_EMAIL,
    to: RECEIVER_EMAIL,
    subject: 'Hello',
    text: 'Hello world',
    html: '<h1>Hello world</h1>'
}

const transporter = nodemailer.createTransport({
    host: HOST,
    port: SMTP_CONFIG,
    secure: false,
    auth: {
        user: SENDER_EMAIL,
        pass: PASS
    }
});

