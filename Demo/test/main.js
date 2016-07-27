var log4js = require('log4js');
var logger = log4js.getLogger('qas');
logger.setLevel('RESULT');
describe('login', () => {
    beforeAll(() => {
        browser.url('/');
        logger.info('Navigate to qTest site');
    });
    afterAll(() => {
        browser.pause(10000).end();
        //browser.close();
    });
    it('should expand browser', () => {
        browser.windowHandleMaximize();
        logger.info('Open maximize browser');
    });
});