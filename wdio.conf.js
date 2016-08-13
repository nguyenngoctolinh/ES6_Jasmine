var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'logs/es6_jasmine.log', category: 'es6_jasmine' }
  ]
});
exports.config = {
  specs: [
    './src/specs/login.js'
  ],
  exclude: [
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    // browserName: 'firefox'
    browserName: 'chrome'
  }],
  sync: true,
  logLevel: 'result',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'https://www.gmail.com/',
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
  //Hook
  before: function (capabilities, specs) {
    require("babel-register");
    require("babel-polyfill");

  }
}
