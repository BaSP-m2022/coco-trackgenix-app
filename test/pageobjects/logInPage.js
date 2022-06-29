/* eslint-disable no-undef */
class loginPage {
  //getters

  get headerButtonHome() {
    return $('#root > div > header > div > a');
  }
  get headerSearchBox() {
    return $('#root > div > header > div > input[type=text]');
  }

  get footerIconLinkIn() {
    return $('#root > div > footer > div > div > a:nth-child(1) > img');
  }
  get footerIconLinkFb() {
    return $('#root > div > footer > div > div > a:nth-child(2) > img');
  }
  get footerIconLinkTw() {
    return $('#root > div > footer > div > div > a:nth-child(3) > img');
  }
  get footerIconLinkGh() {
    return $('#root > div > footer > div > div > a:nth-child(4) > img');
  }
  get footerIconLinkIg() {
    return $('#root > div > footer > div > div > a:nth-child(5) > img');
  }
  get footerTextPlace() {
    return $('#root > div > footer > div > p:nth-child(2)');
  }
  get footerTextRights() {
    return $('#root > div > footer > div > p:nth-child(3)');
  }

  get logo() {
    return $('#root > div > div > div > div.logo_container__YUs9e');
  }
  get title() {
    return $('#root > div > div > div > div.login_formContainer__3cyuE > div > h2');
  }

  get labelEmail() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(1) > label'
    );
  }
  get labelEmailnput() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(1) > input'
    );
  }
  get labelEmailErrorMsg() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(1) > p'
    );
  }
  get labelPassword() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(2) > label'
    );
  }
  get labelPasswordInput() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(2) > input'
    );
  }
  get labelPasswordErrorMsg() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(2) > p'
    );
  }

  get logInButtonLogIn() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div.login_loginBtn__20UQA > button'
    );
  }

  //Setters

  async setEmail(email) {
    await this.labelEmailnput.setValue(email);
  }
  async setPassword(password) {
    await this.labelPasswordInput.setValue(password);
  }

  //methods

  async fillLogInForm(email, password) {
    await this.setEmail(email);
    await this.setPassword(password);
  }

  async clickHeaderButtonHome() {
    await this.headerButtonHome.click();
    browser.pause(4000);
  }
  async clickHeaderSearchBox() {
    await this.headerSearchBox.click();
    browser.pause(4000);
  }
  async clickLogInButtonLogIn() {
    await this.logInButtonLogIn.click();
    browser.pause(4000);
  }
}
module.exports = new loginPage();
