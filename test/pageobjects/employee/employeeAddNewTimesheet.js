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

  get employeeAddNewTimesheetPageLogo() {
    return $('#root > div > div > div > div.logo_container__YUs9e');
  }
  get employeeAddNewTimesheetPageTitle() {
    return $('#root > div > div > div > div:nth-child(2) > h2');
  }

  get employeeAddNewTimesheetPageDropdowsEmployee() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1) > select'
    );
  }
  get employeeAddNewTimesheetPageDropdowsEmployeeTitle() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1) > select > option:nth-child(1)'
    );
  }
  get employeeAddNewTimesheetPageDropdowsEmployeeSelect() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1) > select > option:nth-child(2)'
    );
  }
  get employeeAddNewTimesheetPageDropdowsProject() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2) > select'
    );
  }
  get employeeAddNewTimesheetPageDropdowsProjectTitle() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(1)'
    );
  }
  get employeeAddNewTimesheetPageDropdowsProjectSelect() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)'
    );
  }
  get employeeAddNewTimesheetPageDropdowsTask() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(3) > select'
    );
  }
  get employeeAddNewTimesheetPageDropdowsTaskTitle() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(3) > select > option:nth-child(1)'
    );
  }
  get employeeAddNewTimesheetPageDropdowsTaskSelect() {
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

  get employeeAddNewTimesheetPageButtonConfirm() {
    return $(
      '#root > div > div > div > form > div.time-sheets_btnContainer__fPrOP > button.time-sheets_timesheetButton__36_a6'
    );
  }
  get employeeAddNewTimesheetPageButtonCancel() {
    return $(
      '#root > div > div > div > form > div.time-sheets_btnContainer__fPrOP > button.time-sheets_returnTimesheetBtn__2Kp49'
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
    await this.employeeAddNewTimesheetPageDropdowsEmployeee.click();
    browser.pause(4000);
    await this.employeeAddNewTimesheetPageDropdowsEmployeeSelect.click();
    browser.pause(4000);
    await this.employeeAddNewTimesheetPageDropdowsProject.click();
    browser.pause(4000);
    await this.employeeAddNewTimesheetPageDropdowsProjectSelect.click();
    browser.pause(4000);
    await this.employeeAddNewTimesheetPageDropdowsTask.click();
    browser.pause(4000);
    await this.employeeAddNewTimesheetPageDropdowsTaskSelect.click();
    browser.pause(4000);
  }

  async clickHeaderButtonHome() {
    await this.headerButtonHome.click();
    browser.pause(4000);
  }
  async clickEmployeeAddNewProjectPageButtonConfirm() {
    await this.employeeAddNewTimesheetPageButtonConfirm.click();
    browser.pause(4000);
  }
  async clickEmployeeAddNewProjectPageButtonCancel() {
    await this.employeeAddNewTimesheetPageButtonCancel.click();
    browser.pause(4000);
  }
}
module.exports = new employeeAddNewTimesheetPage();
