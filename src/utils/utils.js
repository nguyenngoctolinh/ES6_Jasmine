import { logger } from '../../log.conf.js'

export class utils {

  static verifyEqual(expectedValue) {
    return (value) => {
      try {
        expect(value).toBe(expectedValue);
        logger.info('[Verify Equal] Actual: ' + value + ' === ' + 'Expected: ' + expectedValue);
      } catch (err) {
        logger.error('[Verify Equal] Actual: ' + value + ' !== ' + 'Expected: ' + expectedValue);
      }
    }
  }

  static verifyNotNull() {
    return (value) => {
      try {
        expect(value).not.toBe(null);
        logger.info('[Verify Not Null] The actual value is not null');
      } catch (err) {
        logger.error('[Verify Not Null] The actual value is null');
      }
    }
  }

  static verifyPopulated(expectedValue) {
    return (element) => {
      browser.getAttribute(element, 'value')
        .then((value) => this.verifyNotNull())
        .then((value) => this.verifyEqual(expectedValue))
        .then(() => {
          // logger.info(`[Verify Populated] The ${expectedValue} is populated on ${element} field`)
          console.log(`[Verify Populated] The ${expectedValue} is populated on ${element} field`);
        })
        .catch(() => {
          // logger.error(`[Verify Populated] The ${expectedValue} is not populated on ${element} field`);
          console.log(`[Verify Populated] The ${expectedValue} is not populated on ${element} field`);
        });
    }

  }

}