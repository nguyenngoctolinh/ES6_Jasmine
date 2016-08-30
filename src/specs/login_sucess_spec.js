import { LoginObjects } from '../object_page/login_objects'
import { InboxObjects } from '../object_page/inbox_objects'
import { registeredAccounts } from '../data/login_valid_data'
import { logger } from '../../log.conf'


describe('login successfully', () => {

  beforeAll(() => {
    browser.url('/');
    browser.windowHandleMaximize();
  });

  afterAll(() => {
    browser.pause(10000);
    browser.end();
  });

  for (let index = 0; index < registeredAccounts.length; index++) {
    it(`should log in successfully with valid account: ${registeredAccounts[index].username}`, () => {

      const LoginPage = new LoginObjects();
      const InboxPage = new InboxObjects();


      LoginPage.emailTxt.setValue(registeredAccounts[index].username);
      LoginPage.nextBtn.click();
      LoginPage.pwdTxt.setValue(registeredAccounts[index].pwd);
      LoginPage.signInBtn.click();

      InboxPage.accountImg.waitForVisible();
      expect(browser.getTitle()).toBe(`Inbox - ${registeredAccounts[index].username} - Gmail`);
      console.log(`Log in Successfully with the valid account: ${registeredAccounts[index].username}`);
      logger.info(`Log in Successfully with the valid account: ${registeredAccounts[index].username}`);

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
