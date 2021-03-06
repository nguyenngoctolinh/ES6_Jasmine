var log4js = require('log4js');

log4js.configure({
  appenders: [
    { type: 'file', filename: 'logs/es6_jasmine.log', category: 'es6_jasmine' }
  ],
});

exports.config = {
  specs: [
    './src/specs/**/*_spec.js'
  ],
  suites: {
    login: [
      './src/specs/login_success_spec.js',
      './src/specs/login_failure_spec.js'
    ]
  },
  maxInstances: 10,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome'
  }],
  sync: true,
  logLevel: 'result',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'https://www.gmail.com',
  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000,
  },

  reporters: ['allure'],
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
