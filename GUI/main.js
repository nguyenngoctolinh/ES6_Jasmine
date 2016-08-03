var logger = require('../log.conf.js');
describe('login', () => {
  beforeAll(() => {
    browser.url('/');
    logger.info('Open browser and navigate to facebook site');
  });
  afterAll(() => {
    browser.pause(10000).end();
  });
  it('should expand browser', () => {
    browser.windowHandleMaximize();
    logger.info('Expand browser');
  });
});