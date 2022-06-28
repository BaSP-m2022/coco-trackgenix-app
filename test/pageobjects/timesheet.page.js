/* eslint-disable no-undef */
class GeneralPages {
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
  get instagram() {
    return $('#root > div > footer > div > div > a:nth-child(5)');
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
      '#root > div > div > div > form > div.time-sheets_btnContainer__fPrOP > button.time-sheets_timesheetButton__36_a6'
    );
  }
  get btn_return() {
    return $(
      '#root > div > div > div > form > div.time-sheets_btnContainer__fPrOP > button.time-sheets_returnTimesheetBtn__2Kp49'
    );
  }

  get h2_timeSheet() {
    return $('#root > div > div > div > div.projects_container__1eYs7 > h2');
  }

  get logo() {
    return $('#root > div > div > div > div > div');
  }

  get addTimeSheet() {
    return $('#root > div > div > section > button');
  }

  get paragraph_01() {
    return $('#root > div > footer > div > p:nth-child(2)');
  }
  get paragraph_02() {
    return $('#root > div > footer > div > p:nth-child(3)');
  } //ME FALTAN LOS MODALSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

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

  get div_select_employee() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1)'
    );
  }
  get div_select_project() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2)'
    );
  }
  get div_select_task() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(3)'
    );
  }
  get div_select_startDate() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(2) > div:nth-child(1) > div'
    );
  }
  get div_select_endDate() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(2) > div:nth-child(2) > div'
    );
  }

  get select_employee() {
    return $('');
  }
  get select_project() {
    return $('');
  }
  get select_task() {
    return $('');
  }
  get select_startDate() {
    return $('');
  }
  get select_endDate() {
    return $('');
  }

  async asd() {
    await this.asd.setValue(asd);
  }
}

module.exports = new GeneralPages();
