var jasmine = require('jasmine');
console.log(jasmine)
exports.config = {
    specs: [
        './test/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instance available you can make sure that not more than
        // 5 instance gets started at a time.
        maxInstances: 5,
        //
        browserName: 'firefox'
    }],
    sync: true,
    logLevel: 'result',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'https://sandbox.qtestdev.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000,
        expectationResultHandler: function (passed, assertion) {
        }
    },

    onPrepare: function () {
        var jasmineReporters = require('jasmine-reporters');
        // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        //     consolidateAll: true,
        //     savePath: 'testresults',
        //     filePrefix: 'xmloutput'
        // }));
    },
}
