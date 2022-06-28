/* eslint-disable no-undef */
class employeeEditProjectPage {
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

  get employeeEditProjectPageLogo() {
    return $('#root > div > div > div > div.logo_container__YUs9e');
  }
  get employeeEditProjectPageTitle() {
    return $('#root > div > div > div > h2');
  }

  get employeeEditProjectPageLabelName() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div.addNew_columnContainer__1lg50 > div:nth-child(1) > input'
    );
  }
  get employeeEditProjectPageLabelDescription() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div.addNew_columnContainer__1lg50 > div:nth-child(2) > input'
    );
  }
  get employeeEditProjectPageLabelStartDate() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div.addNew_columnContainer__1lg50 > div:nth-child(1) > input'
    );
  }
  get employeeEditProjectPageLabelEndDate() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div.addNew_columnContainer__1lg50 > div:nth-child(4) > input'
    );
  }
  get employeeEditProjectPageLabelClientName() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(1) > input'
    );
  }
  get employeeEditProjectPageDropdowsActive() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select'
    );
  }
  get employeeEditProjectPageDropdowsActiveTitle() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select > option:nth-child(1)'
    );
  }
  get employeeEditProjectPageDropdowsActiveTrue() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select > option:nth-child(2)'
    );
  }
  get employeeEditProjectPageDropdowsActiveFalse() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select > option:nth-child(3)'
    );
  }
  get employeeEditProjectPageDropdowsEmployeee() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > select'
    );
  }
  get employeeEditProjectPageDropdowsEmployeeTitle() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > select > option:nth-child(1)'
    );
  }
  get employeeEditProjectPageDropdowsEmployeeSelect() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > select > option:nth-child(2)'
    );
  }
  get employeeEditProjectPageLabelAdmin() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(4) > input'
    );
  }

  get employeeEditProjectPageButtonConfirm() {
    return $(
      '#root > div > div > div > form > div.addNew_btnContainer__s4aoC > button.addNew_projectButton__1aZdV'
    );
  }
  get employeeEditProjectPageButtonCancel() {
    return $(
      '#root > div > div > div > form > div.addNew_btnContainer__s4aoC > button.addNew_returnProjectBtn__2nYYz'
    );
  }

  //Setters

  async setName(name) {
    await this.signUpFieldName.setValue(name);
  }
  async setDescription(description) {
    await this.signUpFieldLastName.setValue(description);
  }
  async setStartDate(StartDate) {
    await this.signUpFieldPhone.setValue(StartDate);
  }
  async setEndDate(EndDate) {
    await this.signUpFieldEmail.setValue(EndDate);
  }
  async setClientName(clientName) {
    await this.signUpFieldPassword.setValue(clientName);
  }
  async setAdmin(admin) {
    await this.signUpFieldPassword.setValue(admin);
  }

  //methods

  async fillSignUpForm(name, description, startDate, endDate, clientName, admin) {
    await this.setName(name);
    await this.setLastName(description);
    await this.setPhone(startDate);
    await this.setEmail(endDate);
    await this.setPassword(clientName);
    await this.setPassword(admin);
  }
  async fillSignUpFormDorpdowns() {
    await this.employeeEditProjectPageDropdowsActive.click();
    browser.pause(4000);
    await this.employeeEditProjectPageDropdowsActiveTrue.click();
    browser.pause(4000);
    await this.employeeEditProjectPageDropdowsEmployeee.click();
    browser.pause(4000);
    await this.employeeEditProjectPageDropdowsEmployeeSelect.click();
    browser.pause(4000);
  }

  async clickHeaderButtonHome() {
    await this.headerButtonHome.click();
    browser.pause(4000);
  }
  async clickEmployeeEditProjectPageButtonConfirm() {
    await this.employeeEditProjectPageButtonConfirm.click();
    browser.pause(4000);
  }
  async clickEmployeeEditProjectPageButtonCancel() {
    await this.employeeEditProjectPageButtonCancel.click();
    browser.pause(4000);
  }
}
module.exports = new employeeEditProjectPage();
