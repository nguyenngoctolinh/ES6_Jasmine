import jSonArr  from '../data/login_valid_data.json'
import { LoginObjects } from '../object_page/login_objects'
import { InboxObjects } from '../object_page/inbox_objects'
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

  let registeredAccounts = JSON.parse(JSON.stringify(jSonArr.validData));

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

      let arrWindows = browser.windowHandles();
      browser.switchTab(arrWindows.value[1]);

    });
  }
});
