export class LoginObjects {

  constructor() {

  }

  get emailTxt() { return this.getElement('#Email') }
  get nextBtn() { return this.getElement('#next') }
  get pwdTxt() { return this.getElement('#Passwd') }
  get signInBtn() { return this.getElement('#signIn') }
  get errorMsgEmail() { return this.getElement('//*[@id="errormsg_0_Email"]') }
  get errorMsgPwd() { return this.getElement('//*[@id="errormsg_0_Passwd"]') }
  get anotherAccountLink() { return this.getElement('//*[@id="link-signin-different"]/a') }

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
