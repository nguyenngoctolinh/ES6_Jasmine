import { LoginObjects } from '../object_page/login_objects'
import { InboxObjects } from '../object_page/inbox_objects'
import { ValidData } from '../data/login_valid_data'
import { Logger } from '../../log.conf'

xdescribe('login successfully', () => {

  beforeAll(() => {
    browser.url('/');
    browser.windowHandleMaximize();
  });

  afterAll(() => {
    browser.pause(10000);
    browser.end();
  });

  for (let index = 0; index < ValidData.length; index++) {
    it(`should log in successfully with valid account: ${ValidData[index].val_Username}`, () => {

      const LoginPage = new LoginObjects();
      const InboxPage = new InboxObjects();


      LoginPage.emailTxt.setValue(ValidData[index].val_Username);
      LoginPage.nextBtn.click();
      LoginPage.pwdTxt.setValue(ValidData[index].val_Pwd);
      LoginPage.signInBtn.click();

      InboxPage.accountImg.waitForVisible();
      expect(browser.getTitle()).toBe(`Inbox - ${ValidData[index].val_Username} - Gmail`);
      console.log(`Log in Successfully with the valid account: ${ValidData[index].val_Username}`);
      Logger.info(`Log in Successfully with the valid account: ${ValidData[index].val_Username}`);

      InboxPage.accountImg.click();
      InboxPage.addAccountLnk.click();

      // for (let i = 0; i < arrWindows.length; i++){
      //   browser.switchTab(arrWindows.value[++i]);
      // }
      let arrWindows = browser.windowHandles();
      browser.switchTab(arrWindows.value[1]);

    });
  }
});
