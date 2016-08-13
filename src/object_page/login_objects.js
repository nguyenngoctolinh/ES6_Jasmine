export class LoginObjects {

  constructor() {

  }

  get emailTxt() { return browser.element('#Email') }
  get nextBtn() { return browser.element('#next') }
  get pwdTxt() { return browser.element('#Passwd') }
  get signInBtn() { return browser.element('#signIn')}
  get errorMsgEmail() { return browser.element('//*[@id="errormsg_0_Email"]')}
  get errorMsgPwd() { return browser.element('//*[@id="errormsg_0_Passwd"]')}
  
}