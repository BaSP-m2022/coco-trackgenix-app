/* eslint-disable no-undef */
class employeeAddNewProjectPage {
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

  get employeeAddNewProjectPageLogo() {
    return $('#root > div > div > div > div');
  }
  get employeeAddNewProjectPageTitle() {
    return $('#root > div > div > div > h2');
  }

  get employeeAddNewProjectPageLabelName() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(1) >Label'
    );
  }
  get employeeAddNewProjectPageLabelDescription() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(2) >Label'
    );
  }
  get employeeAddNewProjectPageLabelStartDate() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(3) >Label'
    );
  }
  get employeeAddNewProjectPageLabelEndDate() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(4) >Label'
    );
  }
  get employeeAddNewProjectPageLabelClientName() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(1) > input'
    );
  }
  get employeeAddNewProjectPageDropdowsActive() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select'
    );
  }
  get employeeAddNewProjectPageDropdowsActiveTitle() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select > option:nth-child(1)'
    );
  }
  get employeeAddNewProjectPageDropdowsActiveTrue() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select > option:nth-child(2)'
    );
  }
  get employeeAddNewProjectPageDropdowsActiveFalse() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select > option:nth-child(3)'
    );
  }
  get employeeAddNewProjectPageDropdowsEmployeee() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > select'
    );
  }
  get employeeAddNewProjectPageDropdowsEmployeeTitle() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > select > option:nth-child(1)'
    );
  }
  get employeeAddNewProjectPageDropdowsEmployeeSelect() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > select > option:nth-child(2)'
    );
  }
  get employeeAddNewProjectPageLabelAdmin() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(4) > input'
    );
  }

  get employeeAddNewProjectPageButtonConfirm() {
    return $(
      '#root > div > div > div > form > div.addNew_btnContainer__s4aoC > button.addNew_projectButton__1aZdV'
    );
  }
  get employeeAddNewProjectPageButtonCancel() {
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
    await this.employeeAddNewProjectPageDropdowsActive.click();
    browser.pause(4000);
    await this.employeeAddNewProjectPageDropdowsActiveTrue.click();
    browser.pause(4000);
    await this.employeeAddNewProjectPageDropdowsEmployeee.click();
    browser.pause(4000);
    await this.employeeAddNewProjectPageDropdowsEmployeeSelect.click();
    browser.pause(4000);
  }

  async clickHeaderButtonHome() {
    await this.headerButtonHome.click();
    browser.pause(4000);
  }
  async clickEmployeeAddNewProjectPageButtonConfirm() {
    await this.employeeAddNewProjectPageButtonConfirm.click();
    browser.pause(4000);
  }
  async clickEmployeeAddNewProjectPageButtonCancel() {
    await this.employeeAddNewProjectPageButtonCancel.click();
    browser.pause(4000);
  }
}
module.exports = new employeeAddNewProjectPage();
