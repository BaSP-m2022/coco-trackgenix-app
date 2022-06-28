/* eslint-disable no-undef */
class employeeTimesheetsPage {
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

  get employeeTimesheetsPageLogo() {
    return $('#root > div > div > section > div.logo_container__YUs9e');
  }
  get employeeTimesheetsPageTitle() {
    return $('#root > div > div > section > h2');
  }
  get employeeTimesheetsPageButtonAddNewTimesheet() {
    return $('#root > div > div > section > button');
  }
  get employeeTimesheetsPageTimesheetRow() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(9)'
    );
  }

  get employeeTimesheetsPageTimesheetRowEmployeeId() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(9) > td:nth-child(1)'
    );
  }
  get employeeTimesheetsPageTimesheetRowTimesheetId() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(9) > td:nth-child(2)'
    );
  }
  get employeeTimesheetsPageTimesheetRowStartDate() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(9) > td:nth-child(3)'
    );
  }
  get employeeTimesheetsPageTimesheetRowEndDate() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(9) > td:nth-child(4)'
    );
  }
  get employeeTimesheetsPageTimesheetRowTasks() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(9) > td:nth-child(5)'
    );
  }
  get employeeTimesheetsPageTimesheetRowEdit() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(9) > td.table_buttonTd__1cGKe > button:nth-child(1)'
    );
  }
  get employeeTimesheetsPageTimesheetRowDelete() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(9) > td.table_buttonTd__1cGKe > button:nth-child(2)'
    );
  }

  //Setters

  //methods

  async clickHeaderButtonHome() {
    await this.headerButtonHome.click();
    browser.pause(4000);
  }
  async clickEmployeeTimesheetsPageButtonAddNewTimesheet() {
    await this.employeeTimesheetsPageButtonAddNewTimesheet.click();
    browser.pause(4000);
  }
  async clickEmployeeTimesheetsPageTimesheetRowEdit() {
    await this.employeeTimesheetsPageTimesheetRowEdit.click();
    browser.pause(4000);
  }
  async clickEmployeeTimesheetsPageTimesheetRowDelete() {
    await this.employeeTimesheetsPageTimesheetRowDelete.click();
    browser.pause(4000);
  }
}
module.exports = new employeeTimesheetsPage();
