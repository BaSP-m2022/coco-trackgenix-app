/* eslint-disable no-undef */
class TimeSheetPage {
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

  get addTimeSheet() {
    return $('#root > div > div > section > button');
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

  get select_dropdown_employee() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1)'
    );
  }
  get select_dropdown_project() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2) > select'
    );
  }
  get select_dropdown_task() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(3) > select'
    );
  }
  get select_dropdown_startDate() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(2) > div:nth-child(1) > div > input'
    );
  }
  get select_dropdown_endDate() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(2) > div:nth-child(2) > div > input'
    );
  }

  get error_msg_add_dropdown_employee() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(1) > p'
    );
  }
  get error_msg_add_dropdown_project() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(2) > p'
    );
  }
  get error_msg_add_task() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(1) > div:nth-child(3) > p'
    );
  }
  get error_msg_add_startDate() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(2) > div:nth-child(1) > div > p'
    );
  }
  get error_msg_add_endDate() {
    return $(
      '#root > div > div > div > form > div.time-sheets_mainContainer__1QfEp > div:nth-child(2) > div:nth-child(2) > div > p'
    );
  }

  async asd() {
    await this.asd.setValue(asd);
  }
}

module.exports = new TimeSheetPage();
