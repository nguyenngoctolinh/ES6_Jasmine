import { loginPage } from './pages/login.page'
import { Element } from './object_repository/object.login.page';

describe('login', () => {

  beforeAll(() => {
    browser.url('https://sandbox.qtestdev.com');
    // browser.url('/');
  });

  afterAll(() => {
    browser.pause(10000).end();
  });

  it('Should login successfully', () => {
    // loginPage.login(Element.email, 'es6jasmine@gmail.com', Element.pwd, 'es6_jasmine', Element.loginbtn);
    browser.setValue(Element.userName, 'linhnguyen@qasymphony.com');
    browser.click(Element.passwordPlaceholder);
    browser.setValue(Element.password, 'admin123');
    browser.click(Element.loginForm);
  });
});

