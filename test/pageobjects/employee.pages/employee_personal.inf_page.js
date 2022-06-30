/* eslint-disable no-dupe-class-members */
/* eslint-disable no-undef */
// const { $CombinedState } = require('redux');

class EmployeePersonalInf {
  get h2_employee() {
    return $('#root > div > div > section > h2:nth-child(2)');
  }
  get h2_personalInf() {
    return $('#root > div > div > section > h2:nth-child(3)');
  }
  get h2_editEmployee() {
    return $('#root > div > div > div > div.formEmployee_formContainer__2w_8O > h2');
  }

  get table() {
    return $(
      '#root > div > div > section > div.table_container__2zHgd > table > thead > tr > th:nth-child(2)'
    );
  }
  get form_editEmployee() {
    return $('#root > div > div > div > div.formEmployee_formContainer__2w_8O > form');
  }

  get div_edit_name() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(1)'
    );
  }
  get div_edit_lastName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(2)'
    );
  }
  get div_edit_phone() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(3)'
    );
  }
  get div_edit_email() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(4)'
    );
  }
  get div_edit_password() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(5)'
    );
  }
  get div_edit_active() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(6)'
    );
  }

  get input_edit_name() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(1) > input'
    );
  }
  get input_edit_lastName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(2) > input'
    );
  }
  get input_edit_phone() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(3) > input'
    );
  }
  get input_edit_email() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(4) > input'
    );
  }
  get input_edit_password() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(5) > input'
    );
  }
  get input_edit_active() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(6) > input'
    );
  }

  get btn_edit_create() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.employees_containerBtn__3oxVC > button:nth-child(1)'
    );
  }
  get btn_edit_return() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.employees_containerBtn__3oxVC > button:nth-child(2)'
    );
  }

  get err_msg_edit_name() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(1) > p'
    );
  }
  get err_msg_edit_lastName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(2) > p'
    );
  }
  get err_msg_edit_phone() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(3) > p'
    );
  }
  get err_msg_edit_email() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(4) > p'
    );
  }
  get err_msg_edit_password() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(5) > p'
    );
  }
  get err_msg_edit_active() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(5) > p'
    );
  }

  get modal_edit_create() {
    return $('#root > div > div > div > div.modal_modalOverlay__1jXdD > div');
  }
  get modal_edit_btn_confirm() {
    return $(
      '#root > div > div > div > div.modal_modalOverlay__1jXdD > div > div:nth-child(3) > button:nth-child(1)'
    );
  }
  get modal_edit_btn_cancel() {
    return $(
      '#root > div > div > div > div.modal_modalOverlay__1jXdD > div > div:nth-child(3) > button:nth-child(2)'
    );
  }
}

module.exports = new EmployeePersonalInf();
