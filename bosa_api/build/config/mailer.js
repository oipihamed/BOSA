"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer = require("nodemailer");
exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'sebedrmz1600@gmail.com',
        pass: 'ctaoicbnjnavqwcl', // generated ethereal password
    },
});
exports.transporter.verify().then(() => {
    console.log('ready for send emails');
});
