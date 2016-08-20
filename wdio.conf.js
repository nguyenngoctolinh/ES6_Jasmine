var log4js = require('log4js');
var AllureReporter = require('jasmine-allure-reporter');

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
      './test/specs/login.success.spec.js',
      './test/specs/login.failure.spec.js'
    ]
  },
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
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
    defaultTimeoutInterval: 30000,
    expectationResultHandler: function (passed, assertion) {
      /**
        * only take screenshot if assertion failed
        */
      if (passed) {
        return;
      }

      var title = assertion.message.replace(/\s/g, '-');
      browser.saveScreenshot(('./error/assertionError_' + title + '.png'));
    }
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
