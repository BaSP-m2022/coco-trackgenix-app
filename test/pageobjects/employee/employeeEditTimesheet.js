/* eslint-disable no-undef */
class employeeEditTimesheetPage {
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

  get employeeEditTimesheetPageLogo() {
    return $('#root > div > div > div > div.logo_container__YUs9e');
  }
  get employeeEditTimesheetPageTitle() {
    return $('#root > div > div > div > div:nth-child(2) > h2');
  }

  get employeeEditTimesheetPageDropdowsEmployee() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1) > select'
    );
  }
  get employeeEditTimesheetPageDropdowsEmployeeTitle() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1) > select > option:nth-child(1)'
    );
  }
  get employeeEditTimesheetPageDropdowsEmployeeSelect() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1) > select > option:nth-child(2)'
    );
  }
  get employeeEditTimesheetPageDropdowsProject() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2) > select'
    );
  }
  get employeeEditTimesheetPageDropdowsProjectTitle() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(1)'
    );
  }
  get employeeEditTimesheetPageDropdowsProjectSelect() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)'
    );
  }
  get employeeEditTimesheetPageDropdowsTask() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(3) > select'
    );
  }
  get employeeEditTimesheetPageDropdowsTaskTitle() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(3) > select > option:nth-child(1)'
    );
  }
  get employeeEditTimesheetPageDropdowsTaskSelect() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(3) > select > option:nth-child(2)'
    );
  }
  get employeeAddNewProjectPageLabelStartDate() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(2) > div:nth-child(1) > div > input'
    );
  }
  get employeeAddNewProjectPageLabelEndDate() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(2) > div:nth-child(2) > div > input'
    );
  }

  get employeeEditTimesheetPageButtonConfirm() {
    return $(
      '#root > div > div > div > form > div:nth-child(2) > div > button.time-sheets_timesheetButton__36_a6'
    );
  }
  get employeeEditTimesheetPageButtonCancel() {
    return $(
      '#root > div > div > div > form > div:nth-child(2) > div > button.time-sheets_returnTimesheetBtn__2Kp49'
    );
  }

  //Setters

  async setEndDate(EndDate) {
    await this.signUpFieldEmail.setValue(EndDate);
  }
  async setClientName(clientName) {
    await this.signUpFieldPassword.setValue(clientName);
  }

  //methods

  async fillSignUpForm(startDate, endDate) {
    await this.setPhone(startDate);
    await this.setEmail(endDate);
  }
  async fillSignUpFormDorpdowns() {
    await this.employeeEditTimesheetPageDropdowsEmployeee.click();
    browser.pause(4000);
    await this.employeeEditTimesheetPageDropdowsEmployeeSelect.click();
    browser.pause(4000);
    await this.employeeEditTimesheetPageDropdowsProject.click();
    browser.pause(4000);
    await this.employeeEditTimesheetPageDropdowsProjectSelect.click();
    browser.pause(4000);
    await this.employeeEditTimesheetPageDropdowsTask.click();
    browser.pause(4000);
    await this.employeeEditTimesheetPageDropdowsTaskSelect.click();
    browser.pause(4000);
  }

  async clickHeaderButtonHome() {
    await this.headerButtonHome.click();
    browser.pause(4000);
  }
  async clickEmployeeEditTimesheetPageButtonConfirm() {
    await this.employeeEditTimesheetPageButtonConfirm.click();
    browser.pause(4000);
  }
  async clickEmployeeEditTimesheetPageButtonCancel() {
    await this.employeeEditTimesheetPageButtonCancel.click();
    browser.pause(4000);
  }
}
module.exports = new employeeEditTimesheetPage();
