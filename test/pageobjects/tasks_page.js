/* eslint-disable no-dupe-class-members */
/* eslint-disable no-undef */
class TaskPage {
  get h2_tasks() {
    return $('#root > div > div > section > h2');
  }
  get h2_newTask() {
    return $('#root > div > div > section > h2');
  }
  get table_tasks() {
    return $('#root > div > div > section > div.tasks_tableContainer__73mPn > div > table');
  }
  get table_head_tasks() {
    return $('#root > div > div > section > div.tasks_tableContainer__73mPn > div > table > thead');
  }
  get btn_add_tasks() {
    return $('#root > div > div > section > div.tasks_tableContainer__73mPn > div > div > button');
  }
  get btn_edit_task() {
    return $(
      '#root > div > div > section > div.tasks_tableContainer__73mPn > div > table > tbody > tr:nth-child(1) > td.table_buttonTd__1cGKe > button:nth-child(1)'
    );
  }
  get btn_delete_task() {
    return $(
      '#root > div > div > section > div.tasks_tableContainer__73mPn > div > table > tbody > tr:nth-child(1) > td.table_buttonTd__1cGKe > button:nth-child(2)'
    );
  }

  get div_task_description() {
    return $(
      '#root > div > div > div > div.taskForm_formContainer__2Tr5k > form > div.taskForm_inputsContainer__31geM > div.taskForm_inputDescription__2kSFP > div'
    );
  }
  get div_worked_hours() {
    return $(
      '#root > div > div > div > div.taskForm_formContainer__2Tr5k > form > div.taskForm_inputsContainer__31geM > div.taskForm_inputWorkedHours__1ALo7 > div'
    );
  }
  get btn_create() {
    return $(
      '#root > div > div > div > div.taskForm_formContainer__2Tr5k > form > div.taskForm_buttonsContainer__2hYHj > button:nth-child(1)'
    );
  }
  get btn_cancel() {
    return $(
      '#root > div > div > div > div.taskForm_formContainer__2Tr5k > form > div.taskForm_buttonsContainer__2hYHj > button:nth-child(2)'
    );
  }
  get modal_success() {
    return $('#root > div > div > div > div.modal_modalOverlay__1jXdD > div');
  }
  get btn_modal_ok() {
    return $(
      '#root > div > div > div > div.modal_modalOverlay__1jXdD > div > button.taskForm_buttonForm__2LzBB'
    );
  }
  get modal_error_add_01() {
    return $('#root > div > div > div > div.modal_modalOverlay__1jXdD > div');
  }
  get btn_modal_error_add_01() {
    return $(
      '#root > div > div > div > div.modal_modalOverlay__1jXdD > div > button.taskForm_buttonForm__2LzBB'
    );
  }
  get modal_error_edit_01() {
    return $(
      '#root > div > div > div > div.taskForm_formContainer__2Tr5k > form > div.taskForm_inputsContainer__31geM > div.taskForm_inputDescription__2kSFP > div > p'
    );
  }
  get btn_modal_error_add_01() {
    return $(
      '#root > div > div > div > div.taskForm_formContainer__2Tr5k > form > div.taskForm_inputsContainer__31geM > div.taskForm_inputWorkedHours__1ALo7 > div > p'
    );
  }

  async asd() {
    await this.asd.setValue(asd);
  }
}

module.exports = new TaskPage();
