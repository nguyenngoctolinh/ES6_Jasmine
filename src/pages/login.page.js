import { customKeyworks } from '../custom_keyworks/custom.keyworks'

export class loginPage{
    static login(userName, valName, pwd, valPwd, loginBtn){
        customKeyworks.sendKeys(userName, valName);
        customKeyworks.sendKeys(pwd, valPwd);
        customKeyworks.click(loginBtn);
    }
}
