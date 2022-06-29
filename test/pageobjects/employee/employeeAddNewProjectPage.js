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

  get logo() {
    return $('#root > div > div > div > div');
  }
  get title() {
    return $('#root > div > div > div > h2');
  }

  get labelName() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(1) > label'
    );
  }
  get labelNameInput() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(1) > input'
    );
  }
  get labelNameErrorMsg() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(1) > p'
    );
  }
  get labelDescription() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(2) > label'
    );
  }
  get labelDescriptionInput() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(2) > input'
    );
  }
  get labelDescriptionErrorMsg() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(2) > p'
    );
  }
  get labelStartDate() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(3) > label'
    );
  }
  get labelStartDateInput() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(3) > input'
    );
  }
  get labelStartDateErroMsg() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(3) > p'
    );
  }
  get labelEndDate() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(4) > label'
    );
  }
  get labelEndDateInput() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(4) > input'
    );
  }
  get labelEndDateErrorMsg() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(4) > p'
    );
  }
  get labelClientName() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(1) > label'
    );
  }
  get labelClientNameInput() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(1) > input'
    );
  }
  get labelClientNameErrorMsg() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(4) > p'
    );
  }
  get dropdownsLabelActive() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > label'
    );
  }
  get dropdownsActive() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select'
    );
  }
  get dropdownsActiveErrorMsg() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > p'
    );
  }
  get dropdownsActiveTitle() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select > option:nth-child(1)'
    );
  }
  get dropdownsActiveTrue() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select > option:nth-child(2)'
    );
  }
  get dropdownsActiveFalse() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > select > option:nth-child(3)'
    );
  }
  get dropdownsLabelEmployee() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > label'
    );
  }
  get dropdownsEmployeee() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > select'
    );
  }
  get dropdownsEmployeeeErrorMsg() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > p'
    );
  }
  get dropdownsEmployeeTitle() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > select > option:nth-child(1)'
    );
  }
  get dropdownsEmployeeSelect() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > select > option:nth-child(2)'
    );
  }
  get labelAdmin() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(4) > label'
    );
  }
  get labelAdminInput() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(4) > input'
    );
  }
  get labelAdminErrorMsg() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(4) > p'
    );
  }

  get buttonConfirm() {
    return $(
      '#root > div > div > div > form > div.addNew_btnContainer__s4aoC > button.addNew_projectButton__1aZdV'
    );
  }
  get buttonCancel() {
    return $(
      '#root > div > div > div > form > div.addNew_btnContainer__s4aoC > button.addNew_returnProjectBtn__2nYYz'
    );
  }

  //Setters

  async setName(name) {
    await this.labelNameInput.setValue(name);
  }
  async setDescription(description) {
    await this.labelDescriptionInput.setValue(description);
  }
  async setStartDate(StartDate) {
    await this.labelStartDateInput.setValue(StartDate);
  }
  async setEndDate(EndDate) {
    await this.labelEndDateInput.setValue(EndDate);
  }
  async setClientName(clientName) {
    await this.labelClientNameInput.setValue(clientName);
  }
  async setAdmin(admin) {
    await this.labelAdminInput.setValue(admin);
  }

  //methods

  async fillForm(name, description, startDate, endDate, clientName, admin) {
    await this.setName(name);
    await this.setDescription(description);
    await this.setStartDate(startDate);
    await this.setEndDate(endDate);
    await this.setClientName(clientName);
    await this.setAdmin(admin);
  }
  async fillFormDorpdowns() {
    await this.dropdownsActive.click();
    browser.pause(4000);
    await this.dropdownsActiveTrue.click();
    browser.pause(4000);
    await this.dropdownsEmployeee.click();
    browser.pause(4000);
    await this.dropdownsEmployeeSelect.click();
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
module.exports = new employeeAddNewProjectPage();
