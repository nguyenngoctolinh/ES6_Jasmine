import { LoginObjects } from '../object_page/login_objects'
import { utils } from '../utils/utils'

export class LoginPage {

  static login(valEmail, valPwd) {

    let LoginPage = new LoginObjects();

    // return LoginPage.emailTxt.setValue(valEmail)
    //   .then(() => LoginPage.nextBtn.click())
    //   .then(() => browser.pause(2000))
    //   .then(() => LoginPage.pwdTxt.setValue(valPwd))
    //   .then(() => LoginPage.signInBtn.click())
    //   .then(() => browser.pause(5000))
    //   .catch((error) => {
    //     console.log(`[Login] Error message: ${error}`)
    //   })
    try {
      browser.pause(10000);
      LoginPage.emailTxt.setValue(valEmail)
      LoginPage.nextBtn.click()
      browser.pause(2000)
      LoginPage.pwdTxt.setValue(valPwd)
      LoginPage.signInBtn.click()
      browser.pause(5000)
    } catch (error){
      console.log(`[Login] Error message: ${error}`)
    }
    
     

  }
}
