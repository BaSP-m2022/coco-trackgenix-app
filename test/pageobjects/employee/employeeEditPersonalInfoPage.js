/* eslint-disable no-undef */
class employeePersonalInfoPage {
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

  get sidebarImageUser() {
    return $('#root > div > div > nav > div.navBar_userInfo__11FpW > img');
  }
  get sidebarUserName() {
    return $('#root > div > div > nav > div.navBar_userInfo__11FpW > div.navBar_userName__12Id5');
  }
  get sidebarUserRole() {
    return $('#root > div > div > nav > div.navBar_userInfo__11FpW > div.navBar_userRole__UDHZ7');
  }
  get sidebarTitleMenu() {
    return $('#root > div > div > nav > div.navBar_menu__3QISb');
  }
  get sidebarItemResources() {
    return $('#root > div > div > nav > ul > li:nth-child(1) > a');
  }
  get sidebarItemTimesheet() {
    return $('#root > div > div > nav > ul > li:nth-child(2) > a');
  }
  get sidebarItemPersonalnfo() {
    return $('#root > div > div > nav > ul > li:nth-child(3) > a');
  }

  get logo() {
    return $('#root > div > div > section > div.logo_container__YUs9e');
  }
  get title() {
    return $('#root > div > div > section > h2:nth-child(2)');
  }

  get labelName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(1) > input'
    );
  }
  get labelLastName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(2) > input'
    );
  }
  get labelPhone() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(3) > input'
    );
  }
  get labelEmail() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(4) > input'
    );
  }
  get labelPassword() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(5) > input'
    );
  }
  get dropdownsActive() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > select'
    );
  }
  get dropdownsActiveTitle() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > select > option:nth-child(1)'
    );
  }
  get dropdownsActiveTrue() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > select > option:nth-child(2)'
    );
  }
  get dropdownsActiveFalse() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > select > option:nth-child(3)'
    );
  }

  get buttonConfirm() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.employees_containerBtn__3oxVC > button:nth-child(1)'
    );
  }
  get buttonCancel() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.employees_containerBtn__3oxVC > button:nth-child(2)'
    );
  }

  //Setters

  async setName(name) {
    await this.labelName.setValue(name);
  }
  async setDescription(lastName) {
    await this.labelDescription.setValue(lastName);
  }
  async setStartDate(StartDate) {
    await this.labelStartDate.setValue(StartDate);
  }
  async setEndDate(EndDate) {
    await this.labelDescription.setValue(EndDate);
  }
  async setClientName(password) {
    await this.labelClientName.setValue(password);
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
module.exports = new employeePersonalInfoPage();
