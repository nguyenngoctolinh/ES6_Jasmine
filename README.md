# ES6 � Jasmine Framework
## Preparation
- Language: ES6
- Framework: Jasmine
- Tool: Visual Studio Code
- Web driver: WebdriverIO
- Plugin: Gulp, Log4js, nodemailer, zipjs, babel
- Services: Selenium Standalone

# How to build project � Jasmine framework 

-  Install NodeJS: 
http://blog.teamtreehouse.com/install-node-js-npm-windows

- Create a new folder 

-  Open Command prompt from this folder: 

```
npm init

```

-  Install WebdriverIO: 

```
npm install webdriverio

```

-  Install Selenium Standalone Service:

```
npm install selenium-standalone �-save-dev

```

-  Use WebdriverIO config:

```
wdio or wdio config

```

Select:
- On my local machine
- Jasmine
- Shall I install the framework adapter for you? (Y/n): Y
- Where are your test specs located? (./test/specs/**/*.js): './src/*.js'
- Press �Enter� to skip this option
- Press �Space bar�to select �Selenium-standalone-https �� --> Press �Enter�
- Shall I install the services for you? (Y/n): Y
- Result
- Press �Enter� 
- What is the base url? (http://localhost): https://www.facebook.com
- Press �Enter�

-  Install Gulp plugin and Gulp - Webdriver to run selenium tests with the WebdriverIO testrunner.


```
npm install �global gulp-cli

npm install gulp �-save-dev

```

```
npm install gulp-webdriver �-save-dev 

```

-  Create a gulp file with the configuration:

```

var gulp = require('gulp');
var webdriver = require('gulp-webdriver');
var shell = require('gulp-shell');

gulp.task('default', () => {
  return gulp.src('wdio.conf.js').pipe(webdriver());
});

gulp.task('reportSM', () => {
  return gulp.src('wdio.conf.js')
    .pipe(shell([
      'allure generate reports',
      'node ./src/utils/zip.js',
      'node ./src/utils/send_mail.js',
      'allure report open -p 8080'
    ]));

```


-  Install log4js to create a .log file


```
npm install log4js �-save

```

-  Install Babel to compile from ES6 to Javascript

```
npm install babel-cli �-save-dev

```

```
npm install babel-preset-es2015 �-save-dev

```

* Config Babel


```
require('babel-register')({
  
});

```


# How to config Allure report


```
npm install wdio-allure-reporter �-save-dev

```

## Define the output directory in the config file of WDIO

```

reporters: ['allure'],
  reporterOptions: {
    allure: {
      outputDir: 'reports'
    }
  },

```

## Display the report

Install Allure command-line tool and process the result directory

```

allure generate reports && allure report open

```

This will generate a report (by default in ./allure-report), and open it in the browser.

# How to send email 

-  Install the nodemailer package

```

npm install nodemailer --save

```

-  Create a transport object

```
let transporter = nodemailer.createTransport('smtps://[username]%40gmail.com:[password]@smtp.gmail.com');

```


-  Email configuration

```

let mailOptions = {
from: '"ES6 Jasmine ??" <es6jasmine@gmail.com>',
to: '"Techcon 2016 ??" <techconsept2016@gmail.com>',
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

```

-  Send mail

```
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: ' + info.response);
});

```

# How to run project


```
npm install or npm i

```


```
gulp

gulp reports

```

