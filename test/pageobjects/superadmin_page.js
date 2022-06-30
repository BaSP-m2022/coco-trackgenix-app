/* eslint-disable no-dupe-class-members */
/* eslint-disable no-undef */
class SuperAdminPage {
  get btn_create() {
    return $(
      '#root > div > div > div > form > div.super-admins_formButtonsContainer__3zKgF > button:nth-child(1)'
    );
  }
  get btn_return() {
    return $(
      '#root > div > div > div > form > div.super-admins_formButtonsContainer__3zKgF > button:nth-child(2)'
    );
  }

  get add_superAdmin() {
    return $('#root > div > div > section > div.table_container__2zHgd > div > button');
  }

  get img_perfil() {
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

  get h2_form_superadmin() {
    return $('');
  }
  get input_name() {
    return $('#root > div > div > div > form > div:nth-child(1) > div > input');
  }
  get input_lastName() {
    return $('#root > div > div > div > form > div:nth-child(2) > div > input');
  }
  get input_email() {
    return $('#root > div > div > div > form > div:nth-child(3) > div > input');
  }
  get input_password() {
    return $('#root > div > div > div > form > div:nth-child(4) > div > input');
  }
  get input_active() {
    return $('#root > div > div > div > form > div:nth-child(5) > div > select');
  }
  get() {
    return $('#root > div > div > div > form > div:nth-child(5) > div > select');
  }
  get input_active() {
    return $('#root > div > div > div > form > div:nth-child(5) > div > select');
  }
  get input_active() {
    return $('#root > div > div > div > form > div:nth-child(5) > div > select');
  }
  get input_active() {
    return $('#root > div > div > div > form > div:nth-child(5) > div > select');
  }

  async asd() {
    await this.asd.setValue(asd);
  }
}

module.exports = new SuperAdminPage();
