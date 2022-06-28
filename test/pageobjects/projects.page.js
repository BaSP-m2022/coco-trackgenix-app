/* eslint-disable no-undef */
class GeneralPages {
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

  get btn_confirm() {
    return $(
      '#root > div > div > div > form > div.addNew_btnContainer__s4aoC > button.addNew_projectButton__1aZdV'
    );
  }
  get btn_cancel() {
    return $(
      '#root > div > div > div > form > div.addNew_btnContainer__s4aoC > button.addNew_returnProjectBtn__2nYYz'
    );
  }

  get h2_projects() {
    return $('#root > div > div > div > div.projects_container__1eYs7 > h2');
  }
  get h2_newProject() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(1) > td.table_buttonTd__1cGKe'
    );
  }
  get addProjects() {
    return $('#root > div > div > div > div.projects_container__1eYs7 > button');
  }

  get table() {
    return $('#root > div > div > div > div.projects_container__1eYs7 > div > table');
  }
  get table_head() {
    return $('#root > div > div > div > div.projects_container__1eYs7 > div > table > thead');
  }
  get table_body() {
    return $('#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody');
  }
  get table_buttons() {
    return $(
      '#root > div > div > div > div.projects_container__1eYs7 > div > table > tbody > tr:nth-child(1) > td.table_buttonTd__1cGKe'
    );
  }

  get div_field_name() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(1)'
    );
  }
  get div_field_description() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(2)'
    );
  }
  get div_field_startDate() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(3)'
    );
  }
  get div_field_endDate() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(4)'
    );
  }
  get div_field_clientName() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(1)'
    );
  }
  get div_field_active() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2)'
    );
  }
  get div_field_selectEmployee() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3)'
    );
  }
  get div_field_administrator() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(4)'
    );
  }

  get input_name() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(1) > input'
    );
  }
  get input_description() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(2) > input'
    );
  }
  get input_startDate() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(3) > input'
    );
  }
  get input_endDate() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(1) > div:nth-child(4)> input'
    );
  }
  get input_clientName() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(1) > input'
    );
  }
  get input_active() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(2) > input'
    );
  }
  get input_selectEmployee() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(3) > input'
    );
  }
  get input_administrator() {
    return $(
      '#root > div > div > div > form > div.addNew_inputContainers__qBpBh > div:nth-child(2) > div:nth-child(4) > input'
    );
  }

  async asd() {
    await this.asd.setValue(asd);
  }
}

module.exports = new GeneralPages();
