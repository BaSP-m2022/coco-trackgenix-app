/* eslint-disable no-dupe-class-members */
/* eslint-disable no-undef */
class EmployeePage {
  get h2_employee() {
    return $('#root > div > div > section > h2');
  }
  get h2_edit_employee() {
    return $('#root > div > div > div > div.formEmployee_formContainer__2w_8O > h2');
  }

  get img_profile() {
    return $('#root > div > div > nav > div.navBar_userInfo__11FpW > img');
  }

  get table() {
    return $('#root > div > div > section > div.table_container__2zHgd > table');
  }
  get table_head() {
    return $('#root > div > div > section > div.table_container__2zHgd > table > thead');
  }
  get table_body() {
    return $('#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody');
  }
  get table_buttons() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(1) > td.table_buttonTd__1cGKe'
    );
  }

  get link_project() {
    return $('#root > div > div > nav > div.navBar_userInfo__11FpW > img');
  }
  get link_timesheet() {
    return $('#root > div > div > nav > ul > li:nth-child(3) > a');
  }
  get link_personalInf() {
    return $('#root > div > div > nav > ul > li:nth-child(3) > a');
  }

  async asd() {
    await this.asd.setValue(asd);
  }
}

module.exports = new EmployeePage();
