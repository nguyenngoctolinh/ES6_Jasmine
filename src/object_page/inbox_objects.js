export class InboxObjects {

  constructor() {

  }

  get accountImg() { return this.getElement('//*[@id="gb"]/div[1]/div[1]/div[2]/div[4]/div[1]/a/span') };
  get addAccountLnk() { return this.getElement('//*[@id="gb"]/div[1]/div[1]/div[2]/div[4]/div[2]/div[3]/div[1]/a') };

  getElement(selectorValue) {
    try {
      browser.waitForExist(selectorValue)
    }
    catch (err) {
      throw new Error(`selector of ${selectorValue} is not exist. Please check` + err)
    }
    return browser.element(selectorValue)
  }
}