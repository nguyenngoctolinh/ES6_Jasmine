import { InboxObjects } from '../object_page/inbox_objects'

export class InboxPage {

  static logout() {
    let InboxPage = new InboxObjects();

    return InboxPage.accountImg.click()
      .then(() => InboxPage.signoutBtn.click())
      .then(() => browser.pause(2000))
      .then(() => InboxPage.otherAccountLnk.click())
      .then(() => browser.pause(2000))
      .then(() => InboxPage.addAccountLnk.click())
      .then(() => browser.pause(5000))
      .catch((error) => {
        console.log(`[Logout] Error message: ${error}`)
      })
  }
}
