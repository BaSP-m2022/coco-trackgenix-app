/* eslint-disable no-undef */
class employeeProjectsPage {
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

  get employeeProjectsPageLogo() {
    return $('#root > div > div > div > div.logo_container__YUs9e');
  }
  get employeeProjectsPageTitle() {
    return $('#root > div > div > div > div.projects_container__1eYs7 > h2');
  }
  get employeeProjectsPageButtonAddNewProject() {
    return $('#root > div > div > div > div.projects_container__1eYs7 > button');
  }
  get employeeProjectsPageProjectRow() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15)'
    );
  }

  get employeeProjectsPageProjectRowName() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15) > td:nth-child(1)'
    );
  }
  get employeeProjectsPageProjectRowClientName() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15) > td:nth-child(2)'
    );
  }
  get employeeProjectsPageProjectRowAdmins() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15) > td:nth-child(3)'
    );
  }
  get employeeProjectsPageProjectRowCreatedAt() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15) > td:nth-child(4)'
    );
  }
  get employeeProjectsPageProjectRowDescription() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15) > td:nth-child(5)'
    );
  }
  get employeeProjectsPageProjectRowStartDate() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15) > td:nth-child(6)'
    );
  }
  get employeeProjectsPageProjectRowEndDate() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15) > td:nth-child(7)'
    );
  }
  get employeeProjectsPageProjectRowEmployees() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15) > td:nth-child(8)'
    );
  }
  get employeeProjectsPageProjectRowActive() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15) > td:nth-child(9)'
    );
  }
  get employeeProjectsPageProjectRowEdit() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15) > td.table_buttonTd__1cGKe > button:nth-child(1)'
    );
  }
  get employeeProjectsPageProjectRowDelete() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(15) > td.table_buttonTd__1cGKe > button:nth-child(2)'
    );
  }

  //Setters

  //methods

  async clickHeaderButtonHome() {
    await this.headerButtonHome.click();
    browser.pause(4000);
  }
  async clickEmployeeProjectsPageButtonAddNewProject() {
    await this.employeeProjectsPageButtonAddNewProject.click();
    browser.pause(4000);
  }
  async clickEmployeeProjectsPageProjectRowEdit() {
    await this.employeeProjectsPageProjectRowEdit.click();
    browser.pause(4000);
  }
  async clickEmployeeProjectsPageProjectRowDelete() {
    await this.employeeProjectsPageProjectRowDelete.click();
    browser.pause(4000);
  }
}
module.exports = new employeeProjectsPage();
