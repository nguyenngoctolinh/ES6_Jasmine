var log4js = require('log4js');

log4js.configure({
  appenders: [
    { type: 'file', filename: 'logs/es6_jasmine.log', category: 'es6_jasmine' }
  ],
});

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'user@gmail.com',
        pass: 'pass'
    }
};

var poolConfig = {
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'user@gmail.com',
        pass: 'pass'
    }
};

var directConfig = {
    name: 'hostname' // must be the same that can be reverse resolved by DNS for your IP
};

exports.config = {
  specs: [
    './src/specs/**/*.spec.js'
  ],
  suites: {
    login: [
      './test/specs/login.success.spec.js',
      './test/specs/login.failure.spec.js'
    ]
  },
  exclude: [
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    // browserName: 'firefox'
    browserName: 'chrome'
  },{
    maxInstances: 5,
    // browserName: 'firefox'
    browserName: 'internet explorer'
  }],
  sync: true,
  logLevel: 'result',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/#identifier',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 500000,
    expectationResultHandler: function (passed, assertion) {
    }
  },
  reporters: ['dot', 'allure'],
  reporterOptions: {
    allure: {
      outputDir: 'reports'
    }
  },
  //Hook
  before: function (capabilities, specs) {
    require("babel-register");
  }
}
