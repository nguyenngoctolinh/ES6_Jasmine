import { LoginPage } from '../pages/login_page'
import { InboxPage } from '../pages/inbox_page'
import { valid_data } from '../data/login_valid_data'

describe('login', () => {

  beforeAll(() => {
    browser.url('/')
    browser.windowHandleMaximize()
  });

  afterAll(() => {
    browser.pause(10000)
    browser.end();
  });

  it('Should login successfully', () => {

    for (let index = 0; index < valid_data.length; index++) {
      // return LoginPage.login(valid_data[index].val_Username, valid_data[index].val_Pwd)
      //   .then(() => InboxPage.logout())
      //   .catch((Error) => {
      //     console.log(`[Log in with valid accounts]Error message: ${Error}`);
      //   })
      try {
        LoginPage.login(valid_data[index].val_Username, valid_data[index].val_Pwd)
        InboxPage.logout()
      } catch (err) {
        console.log(`[Log in with valid accounts]Error message: ${err}`);
        //   })
      }

    }

    // let validData = new Map(valid_data);
    // for (var key of Object.keys(validData)) {
    //   console.log(`${key} = ${validDatap[key]}`);
    // }

  });

});

