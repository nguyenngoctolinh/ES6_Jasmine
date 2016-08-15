export class InboxObjects {

  constructor() {

  }

  get accountImg() { return browser.element('//*[@id="gb"]/div[1]/div[1]/div[2]/div[4]/div[1]/a/span') };
  get signoutBtn() { return browser.element('//*[@id="gb_71"]') };
  get otherAccountLnk() { return browser.element('//*[@id="account-chooser-link"]') };
  get addAccountLnk() { return browser.element('//*[@id="account-chooser-add-account"]') };
  get h1Lable() { return browser.element('/html/body/div/div[2]/div[1]/h1') };

}