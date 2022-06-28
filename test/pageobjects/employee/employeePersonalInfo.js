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

  get employeePersonalInfoPageLogo() {
    return $('#root > div > div > section > div.logo_container__YUs9e');
  }
  get employeePersonalInfoPageTitleEmployees() {
    return $('#root > div > div > section > h2:nth-child(2)');
  }
  get employeePersonalInfoPageTitlePersonalInfo() {
    return $('#root > div > div > div > div.projects_container__1eYs7 > h2');
  }
  get employeePersonalInfoPageRow() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(13)'
    );
  }

  get employeePersonalInfoPageRowFirstName() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(13) > td:nth-child(1)'
    );
  }
  get employeePersonalInfoPageRowLastName() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(13) > td:nth-child(2)'
    );
  }
  get employeePersonalInfoPageRowPhone() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(13) > td:nth-child(3)'
    );
  }
  get employeePersonalInfoPageRowEmail() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(13) > td:nth-child(4)'
    );
  }
  get employeePersonalInfoPageRowPassword() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(13) > td:nth-child(5)'
    );
  }
  get employeePersonalInfoPageRowActive() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(13) > td:nth-child(6)'
    );
  }
  get employeePersonalInfoPageRowEdit() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(13) > td.table_buttonTd__1cGKe > button:nth-child(1)'
    );
  }
  get employeePersonalInfoPageRowDelete() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(13) > td.table_buttonTd__1cGKe > button:nth-child(2)'
    );
  }

  //Setters

  //methods

  async clickHeaderButtonHome() {
    await this.headerButtonHome.click();
    browser.pause(4000);
  }
  async clickEmployeePersonalInfoPageRowEdit() {
    await this.employeePersonalInfoPageRowEdit.click();
    browser.pause(4000);
  }
  async clickEmployeePersonalInfoPageRowDelete() {
    await this.employeePersonalInfoPageRowDelete.click();
    browser.pause(4000);
  }
}
module.exports = new employeePersonalInfoPage();
