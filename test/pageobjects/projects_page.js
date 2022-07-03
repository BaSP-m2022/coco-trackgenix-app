/* eslint-disable no-undef */
class ProjectsPage {
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
  get table_xpath() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/table/tbody/tr[0]');
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

  // async tableList() {
  //   return this.table_xpath.map((Element) => console.log(Element.getText()));
  // }
}

module.exports = new ProjectsPage();
