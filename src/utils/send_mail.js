// "use strict"
var nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport('smtps://es6jasmine%40gmail.com:es6_jasmine@smtp.gmail.com');

let mailOptions = {
  from: '"ES6 Jasmine 👥" <es6jasmine@gmail.com>',
  to: '"Techcon 2016 👥" <techconsept2016@gmail.com>',
  subject: 'Techcon 10th Sept, 2016 Report',
  html: `<p>Dear Techcon 2016, <br><br>
   We have run completely the test suite of Login cases. <br> 
   Please take a look at the attached file for detail. <br><br>
   Thanks and Regards, <br><br>
   ES6 & Jasmine</p>`,

    attachments: [
      {   // file on disk as an attachment
        filename: 'reports.zip',
        path: './reports.zip' // stream this file
      }
    ]
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: ' + info.response);
});


