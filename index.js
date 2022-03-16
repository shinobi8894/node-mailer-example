var nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
 });
 

 const mailOptions = {
    from: 'sender@gmail.com', // Sender address
    to: 'receiver@gmail.com', // List of recipients
    subject: 'Node Mailer', // Subject line
    html: `<h2 style="color:#ff6600;">Hello People!, 
          Welcome to Bacancy!</h2>`,
    attachments: [
       { filename: 'profile.png', path: './images/profile.png' }
    ]
};

transport.sendMail(mailOptions, function(err, info) {
   if (err) {
     console.log(err)
   } else {
     console.log(info);
   }
});