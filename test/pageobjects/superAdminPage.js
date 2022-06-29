/* eslint-disable no-undef */
class adminPage {
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
    return $('#root > div > div > section > div.logo_container__YUs9e');
  }
  get title() {
    return $('#root > div > div > section > h2');
  }

  get row() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(1)'
    );
  }
  get rowTitleName() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > thead > tr > th:nth-child(1)'
    );
  }
  get rowTitleLasrName() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > thead > tr > th:nth-child(2)'
    );
  }
  get rowTitlePhone() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > thead > tr > th:nth-child(3)'
    );
  }
  get rowTitleEmail() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > thead > tr > th:nth-child(4)'
    );
  }
  get rowTitlePassword() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > thead > tr > th:nth-child(5)'
    );
  }
  get rowTitleActive() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > thead > tr > th:nth-child(6)'
    );
  }

  get rowName() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(3) > td:nth-child(1)'
    );
  }
  get rowLastName() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(3) > td:nth-child(2)'
    );
  }
  get rowEmail() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(3) > td:nth-child(3)'
    );
  }
  get rowPassword() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(3) > td:nth-child(4)'
    );
  }
  get rowActive() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(3) > td:nth-child(5)'
    );
  }
  get rowEdit() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(1) > td.table_buttonTd__1cGKe > button:nth-child(1)'
    );
  }
  get rowDelete() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(1) > td.table_buttonTd__1cGKe > button:nth-child(2)'
    );
  }

  get deleteModal() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > div.modal_modalOverlay__1jXdD > div'
    );
  }
  get deleteModalCross() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > div.modal_modalOverlay__1jXdD > div > button'
    );
  }
  get deleteCModalTitle() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > div.modal_modalOverlay__1jXdD > div > h2'
    );
  }
  get deleteModalText1() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > div.modal_modalOverlay__1jXdD > div > div:nth-child(3) > p:nth-child(1)'
    );
  }
  get deleteModalText2() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > div.modal_modalOverlay__1jXdD > div > div:nth-child(3) > p:nth-child(2)'
    );
  }
  get deletenModalCancelButton() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > div.modal_modalOverlay__1jXdD > div > div:nth-child(4) > button.table_deleteModalBtn__1PDV0'
    );
  }
  get deleteModalConfirmButton() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > div.modal_modalOverlay__1jXdD > div > div:nth-child(4) > button.table_stylesModalBtn__gb5_E'
    );
  }

  //Setters

  //methods

  async clickHeaderButtonHome() {
    await this.headerButtonHome.click();
    browser.pause(4000);
  }
  async clickRowEdit() {
    await this.rowEdit.click();
    browser.pause(4000);
  }
  async clickRowDelete() {
    await this.rowDelete.click();
    browser.pause(4000);
  }
  async clickDeleteModalCross() {
    await this.deleteModalCross.click();
    browser.pause(4000);
  }
  async clickDeletenModalCancelButton() {
    await this.deletenModalCancelButton.click();
    browser.pause(4000);
  }
  async clickDeleteModalConfirmButton() {
    await this.deleteModalConfirmButton.click();
    browser.pause(4000);
  }
}
module.exports = new adminPage();
