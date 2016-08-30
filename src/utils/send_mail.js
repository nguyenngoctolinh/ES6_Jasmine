var nodemailer = require("nodemailer");
var os = require('os');
var interfaces = os.networkInterfaces();
var addresses = [];
const port = 8080;
var hostName = '';

var transporter = nodemailer.createTransport('smtps://es6jasmine%40gmail.com:es6_jasmine@smtp.gmail.com');

showIP = () => {
  for (let k in interfaces) {
    for (let k2 in interfaces[k]) {
      let address = interfaces[k][k2];
      if (address.family === 'IPv4' && !address.internal) {
        addresses.push(address.address);
      }
    }
  }
  hostName = addresses[0] + ":" + port;
}
showIP();

let mailOptions = {
  from: '"ES6 Jasmine 👥" <es6jasmine@gmail.com>',
  to: '"Techcon 2016 👥" <techconsept2016@gmail.com>',
  subject: 'Techcon 10th Sept, 2016 Report',
  html: `<p>Dear Techcon 2016, <br/><br/>
   We have run completely the test suite of Login cases. <br> 
   Please take a look at the attached file and the report link: ${hostName}   for detail. <br/><br/>
   Thanks and Regards, <br/><br/>
   ES6 & Jasmine</p>`,

  attachments: [
    {
      filename: 'reports.zip',
      path: './reports.zip'
    }
  ]
}; 

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: ' + info.response);
});