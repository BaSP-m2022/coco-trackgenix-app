/* eslint-disable no-undef */
class employeeAddNewTimesheetPage {
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
    return $('#root > div > div > div > div:nth-child(2) > h2');
  }

  get dropdownsEmployee() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1) > select'
    );
  }
  get dropdownsEmployeeTitle() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1) > select > option:nth-child(1)'
    );
  }
  get dropdownsEmployeeSelect() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1) > select > option:nth-child(2)'
    );
  }
  get dropdownsProject() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2) > select'
    );
  }
  get dropdownsProjectTitle() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(1)'
    );
  }
  get dropdownsProjectSelect() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)'
    );
  }
  get dropdownsTask() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(3) > select'
    );
  }
  get dropdownsTaskTitle() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(3) > select > option:nth-child(1)'
    );
  }
  get dropdownsTaskSelect() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(3) > select > option:nth-child(2)'
    );
  }
  get labelStartDate() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(2) > div:nth-child(1) > div > input'
    );
  }
  get labelEndDate() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(2) > div:nth-child(2) > div > input'
    );
  }

  get buttonConfirm() {
    return $(
      '#root > div > div > div > form > div.time-sheets_btnContainer__fPrOP > button.time-sheets_timesheetButton__36_a6'
    );
  }
  get buttonCancel() {
    return $(
      '#root > div > div > div > form > div.time-sheets_btnContainer__fPrOP > button.time-sheets_returnTimesheetBtn__2Kp49'
    );
  }

  //Setters

  async setStartDate(startDate) {
    await this.labelStartDate.setValue(startDate);
  }
  async setEndDate(endDate) {
    await this.labelEndDate.setValue(endDate);
  }

  //methods

  async fillForm(startDate, endDate) {
    await this.setStartDate(startDate);
    await this.setEndDate(endDate);
  }
  async fillFormDorpdowns() {
    await this.dropdownsEmployeee.click();
    browser.pause(4000);
    await this.dropdownsEmployeeSelect.click();
    browser.pause(4000);
    await this.dropdownsProject.click();
    browser.pause(4000);
    await this.dropdownsProjectSelect.click();
    browser.pause(4000);
    await this.dropdownsTask.click();
    browser.pause(4000);
    await this.dropdownsTaskSelect.click();
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
module.exports = new employeeAddNewTimesheetPage();
