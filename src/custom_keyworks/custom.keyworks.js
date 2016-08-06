import { logger } from '../../log.conf.js'
export class customKeyworks {
  static sendKeys(element, value) {
    return browser.waitUntil(() => browser.isVisible(element))
      .then(() => browser.setValue(element, value))
      .then(() => browser.getValue(element))
      .then(() => this.verifyPopulated(element, value))
      .then(() => logger.info('>>>Send keys successfully!'))
      .catch(() => {
        logger.error('Can not type ' + `${value}` + ' in ' + `${element}` + ' field');
      });
  }

  static click(element) {
    return browser.waitUntil(() => browser.isVisible(element))
      .then(() => browser.click(element))
      .then(() => logger.info(`${element}` + ' is clicked on successfully'))
      .catch(() => {
        logger.error(`${element}` + ' can not be clicked on');
      })
  }
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

  static verifyPopulated(element, expectedValue) {
    browser.getAttribute(element, 'value')
      .then((value) => this.verifyNotNull())
      .then((value) => this.verifyEqual(expectedValue))
      .then(() => logger.info('[Verify Populated] The ' + `${expectedValue}` + ' is populated on ' + `${element}` + 'field'))
      .catch(() => {
        logger.error('[Verify Populated] The ' + `${expectedValue}` + ' is not populated on ' + `${element}` + 'field');
      });
  }
}

// module.exports = customKeyworks;