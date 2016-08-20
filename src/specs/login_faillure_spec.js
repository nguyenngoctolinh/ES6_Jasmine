import { InvalidData } from '../data/login_invalid_data'
import { LoginObjects } from '../object_page/login_objects'
import { InboxObjects } from '../object_page/inbox_objects'
import { Logger } from '../../log.conf'

describe('login unsuccessfully', () => {

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
        LoginPage.emailTxt.setValue(InvalidData[0].inval_Username);
        LoginPage.nextBtn.click();
        LoginPage.pwdTxt.setValue(InvalidData[0].inval_Pwd);
        LoginPage.signInBtn.click();

        let contentErrMsgPwd = LoginPage.errorMsgPwd.getText();
        expect(contentErrMsgPwd).toBe("The email and password you entered don't match.");
        console.log(`Log in unsuccessfully with the password: ${InvalidData[0].inval_Pwd}`);
        Logger.info(`Log in unsuccessfully with the password: ${InvalidData[0].inval_Pwd}`);

    });

    it('should log in unsuccessfully with invalid username', () => {
        const LoginPage = new LoginObjects();
        LoginPage.anotherAccountLink.click();
        LoginPage.emailTxt.setValue(InvalidData[1].inval_Username);
        LoginPage.nextBtn.click();

        let contentErrMsgEmail = LoginPage.errorMsgEmail.getText();
        expect(contentErrMsgEmail).toBe("Sorry, Google doesn't recognize that email.");
        console.log(`Log in unsuccessfully with the Email: ${InvalidData[1].inval_Username}`);
        Logger.info(`Log in unsuccessfully with the Email: ${InvalidData[1].inval_Username}`);
    });

});
