import nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'sebedrmz1600@gmail.com', // generated ethereal user
      pass: 'ctaoicbnjnavqwcl', // generated ethereal password
    },
  });

  transporter.verify().then(() => {
    console.log('ready for send emails');
  });