/* eslint-disable no-undef */
class adminAddPage {
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

  // get sidebarImageUser() {
  //   return $('#root > div > div > nav > div.navBar_userInfo__11FpW > img');
  // }
  // get sidebarUserName() {
  //   return $('#root > div > div > nav > div.navBar_userInfo__11FpW > div.navBar_userName__12Id5');
  // }
  // get sidebarUserRole() {
  //   return $('#root > div > div > nav > div.navBar_userInfo__11FpW > div.navBar_userRole__UDHZ7');
  // }
  // get sidebarTitleMenu() {
  //   return $('#root > div > div > nav > div.navBar_menu__3QISb');
  // }
  // get sidebarItemResources() {
  //   return $('#root > div > div > nav > ul > li:nth-child(1) > a');
  // }
  // get sidebarItemTimesheet() {
  //   return $('#root > div > div > nav > ul > li:nth-child(2) > a');
  // }
  // get sidebarItemPersonalnfo() {
  //   return $('#root > div > div > nav > ul > li:nth-child(3) > a');
  // }

  // Not implemented

  get logo() {
    return $('#root > div > div > div > div.logo_container__YUs9e');
  }
  get title() {
    return $('#root > div > div > div > div.admins_formContainer__3kCmu > h2');
  }

  get labelName() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(1) > label'
    );
  }
  get labelNameInput() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(1) > input'
    );
  }
  get labelNameErrorMsg() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(1) > p'
    );
  }
  get labelLastName() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(2) > label'
    );
  }
  get labelLastNameInput() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(2) > input'
    );
  }
  get labelLastNameErrorMsg() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(2) > p'
    );
  }
  get labelPhone() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(3) > label'
    );
  }
  get labelPhoneInput() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(3) > input'
    );
  }
  get labelPhoneErrorMsg() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(3) > p'
    );
  }
  get labelEmail() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(4) > label'
    );
  }
  get labelEmailInput() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(4) > input'
    );
  }
  get labelEmailErrorMsg() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(4) > p'
    );
  }
  get labelPassword() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(5) > label'
    );
  }
  get labelPasswordInput() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(5) > input'
    );
  }
  get labelPasswordErrorMsg() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(5) > p'
    );
  }
  get dropdownsActive() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div.dropdown_container__3t7mX > select'
    );
  }
  get dropdownsActiveErrorMsg() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div.dropdown_container__3t7mX > p'
    );
  }
  get dropdownsLabelActive() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div.dropdown_container__3t7mX > label'
    );
  }
  get dropdownsActiveTitle() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div.dropdown_container__3t7mX > select > option:nth-child(1)'
    );
  }
  get dropdownsActiveTrue() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div.dropdown_container__3t7mX > select > option:nth-child(2)'
    );
  }
  get dropdownsActiveFalse() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div.dropdown_container__3t7mX > select > option:nth-child(3)'
    );
  }

  get buttonConfirm() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_buttonsContainer__Fgpi8 > button:nth-child(1)'
    );
  }
  get buttonCancel() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_buttonsContainer__Fgpi8 > button:nth-child(2)'
    );
  }

  //Setters

  async setName(name) {
    await this.labelNameInput.setValue(name);
  }
  async setDescription(lastName) {
    await this.labelLastNameInput.setValue(lastName);
  }
  async setphone(phone) {
    await this.labelPhoneInput.setValue(phone);
  }
  async setemail(email) {
    await this.labelEmailInput.setValue(email);
  }
  async setClientName(password) {
    await this.labelPasswordInput.setValue(password);
  }

  //methods

  async fillSignUpForm(name, lastName, phone, email, password) {
    await this.setName(name);
    await this.setLastName(lastName);
    await this.setPhone(phone);
    await this.setEmail(email);
    await this.setPassword(password);
  }
  async fillFormDropdowns() {
    await this.dropdownsActive.click();
    browser.pause(4000);
    await this.dropdownsActiveTrue.click();
    browser.pause(4000);
  }

  async clickHeaderButtonHome() {
    await this.headerButtonHome.click();
    browser.pause(4000);
  }
  async clickButtonConfirm() {
    await this.buttonConfirm.click();
    browser.pause(4000);
  }
  async clickButtonCancel() {
    await this.buttonCancel.click();
    browser.pause(4000);
  }
}
module.exports = new adminAddPage();
