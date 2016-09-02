import { notRegisteredAccounts } from '../data/login_invalid_data'
import { LoginObjects } from '../object_page/login_objects'
import { InboxObjects } from '../object_page/inbox_objects'
import { logger } from '../../log.conf'

xdescribe('login unsuccessfully', () => {

    beforeAll(() => {
        browser.url('/');
        browser.windowHandleMaximize();
    });

    afterAll(() => {
        browser.pause(10000);
        browser.end();
    });

    it('should log in unsuccessfully with invalid password', () => {

        const LoginPage = new LoginObjects();
        LoginPage.emailTxt.setValue(notRegisteredAccounts[0].username);
        LoginPage.nextBtn.click();
        LoginPage.pwdTxt.setValue(notRegisteredAccounts[0].pwd);
        LoginPage.signInBtn.click();

        let contentErrMsgPwd = LoginPage.errorMsgPwd.getText();
        expect(contentErrMsgPwd).toBe("The email and password you entered don't match.");
        console.log(`Log in unsuccessfully with the password: ${notRegisteredAccounts[0].pwd}`);
        logger.info(`Log in unsuccessfully with the password: ${notRegisteredAccounts[0].pwd}`);

    });

    it('should log in unsuccessfully with invalid username', () => {
        const LoginPage = new LoginObjects();
        LoginPage.anotherAccountLink.click();
        LoginPage.emailTxt.setValue(notRegisteredAccounts[1].username);
        LoginPage.nextBtn.click();

        let contentErrMsgEmail = LoginPage.errorMsgEmail.getText();
        expect(contentErrMsgEmail).toBe("Sorry, Google doesn't recognize that email.");
        console.log(`Log in unsuccessfully with the Email: ${notRegisteredAccounts[1].username}`);
        logger.info(`Log in unsuccessfully with the Email: ${notRegisteredAccounts[1].username}`);
    });

});
