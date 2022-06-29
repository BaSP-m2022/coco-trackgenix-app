/* eslint-disable no-undef */
class SuperAdminPage {
  get instagram() {
    return $('#root > div > footer > div > div > a:nth-child(5)');
  }
  get linkedin() {
    return $('#root > div > footer > div > div > a:nth-child(1)');
  }
  get facebook() {
    return $('#root > div > footer > div > div > a:nth-child(2)');
  }
  get twitter() {
    return $('#root > div > footer > div > div > a:nth-child(3)');
  }
  get github() {
    return $('#root > div > footer > div > div > a:nth-child(4)');
  }

  get search() {
    return $('#root > div > header > div > input[type=text]');
  }
  get header() {
    return $('#root > div > header');
  }

  get btn_home() {
    return $('#root > div > header > div > a');
  }
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

  get logo() {
    return $('#root > div > div > div > div > div');
  }

  get add_superAdmin() {
    return $('#root > div > div > section > div.table_container__2zHgd > div > button');
  }

  get paragraph_01() {
    return $('#root > div > footer > div > p:nth-child(2)');
  }
  get paragraph_02() {
    return $('#root > div > footer > div > p:nth-child(3)');
  }

  get sidebar() {
    return $('#root > div > div > nav');
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

  get link_project() {
    return $('#root > div > div > nav > div.navBar_userInfo__11FpW > img');
  }
  get link_timesheet() {
    return $('#root > div > div > nav > ul > li:nth-child(3) > a');
  }
  get link_personalInf() {
    return $('#root > div > div > nav > ul > li:nth-child(3) > a');
  }
  get link_employee() {
    return $('#root > div > div > nav > ul > li:nth-child(2) > a');
  }
  get link_task() {
    return $('#root > div > div > nav > ul > li:nth-child(4) > a');
  }
  get link_admins() {
    return $('#root > div > div > nav > ul > li:nth-child(5) > a');
  }
  get link_superAdmin() {
    return $('#root > div > div > nav > ul > li:nth-child(6) > a');
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
  get () {
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
