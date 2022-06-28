/* eslint-disable no-undef */
class employeeEditPersonalInfoPage {
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

  get employeeEditPersonalInfoPageLogo() {
    return $('#root > div > div > div > div.logo_container__YUs9e');
  }
  get employeeEditPersonalInfoPageTitle() {
    return $('#root > div > div > div > div.formEmployee_formContainer__2w_8O > h2');
  }

  get employeeEditPersonalInfoPageLabelName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(1) > input'
    );
  }
  get employeeEditPersonalInfoPageLabelDescription() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(2) > input'
    );
  }
  get employeeEditPersonalInfoPageLabelphone() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(3) > input'
    );
  }
  get employeeEditPersonalInfoPageLabelemail() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(4) > input'
    );
  }
  get employeeEditPersonalInfoPageLabelClientName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(5) > input'
    );
  }
  get employeeEditPersonalInfoPageDropdowsActive() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > select'
    );
  }
  get employeeEditPersonalInfoPageDropdowsActiveTitle() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > select > option:nth-child(1)'
    );
  }
  get employeeEditPersonalInfoPageDropdowsActiveTrue() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > select > option:nth-child(2)'
    );
  }
  get employeeEditPersonalInfoPageDropdowsActiveFalse() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > select > option:nth-child(3)'
    );
  }

  get employeeEditPersonalInfoPageButtonConfirm() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.employees_containerBtn__3oxVC > button:nth-child(1)'
    );
  }
  get employeeEditPersonalInfoPageButtonCancel() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.employees_containerBtn__3oxVC > button:nth-child(2)'
    );
  }

  //Setters

  async setName(name) {
    await this.employeeEditFieldName.setValue(name);
  }
  async setLastName(lastName) {
    await this.employeeEditFieldLastName.setValue(lastName);
  }
  async setPhone(phone) {
    await this.employeeEditFieldPhone.setValue(phone);
  }
  async setEmail(email) {
    await this.employeeEditFieldEmail.setValue(email);
  }
  async setPassword(Password) {
    await this.employeeEditFieldPassword.setValue(Password);
  }

  //methods

  async fillSignUpForm(name, lastName, phone, email, Password) {
    await this.setName(name);
    await this.setLastName(lastName);
    await this.setPhone(phone);
    await this.setEmail(email);
    await this.setPassword(Password);
  }
  async fillEditFormDorpdowns() {
    await this.employeeEditPersonalInfoPageDropdowsActive.click();
    browser.pause(4000);
    await this.employeeEditPersonalInfoPageDropdowsActiveTrue.click();
    browser.pause(4000);
    await this.employeeEditPersonalInfoPageDropdowsEmployeee.click();
    browser.pause(4000);
    await this.employeeEditPersonalInfoPageDropdowsEmployeeSelect.click();
    browser.pause(4000);
  }

  async clickHeaderButtonHome() {
    await this.headerButtonHome.click();
    browser.pause(4000);
  }
  async clickEmployeeEditProjectPageButtonConfirm() {
    await this.employeeEditPersonalInfoPageButtonConfirm.click();
    browser.pause(4000);
  }
  async clickEmployeeEditProjectPageButtonCancel() {
    await this.employeeEditPersonalInfoPageButtonCancel.click();
    browser.pause(4000);
  }
}
module.exports = new employeeEditPersonalInfoPage();
