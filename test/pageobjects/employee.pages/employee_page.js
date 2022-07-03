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

  get btn_edit() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(14) > td.table_buttonTd__1cGKe > button:nth-child(1)'
    );
  }
  get btn_delete() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > tbody > tr:nth-child(20) > td.table_buttonTd__1cGKe > button:nth-child(2)'
    );
  }
  get modal_btn_confirm_delete() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > div.modal_modalOverlay__1jXdD > div > div:nth-child(4) > button.table_stylesModalBtn__gb5_E'
    );
  }
  get modal_btn_ok() {
    return $(
      '#root > div > div > section > div.modal_modalOverlay__1jXdD > div > div:nth-child(4) > button'
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

  async edit() {
    await this.btn_edit.click();
  }
  async delete() {
    await this.btn_delete.click();
  }
  async confirm_delete() {
    await this.modal_btn_confirm_delete.click();
  }
  async ok() {
    await this.modal_btn_ok.click();
  }
}

module.exports = new EmployeePage();
