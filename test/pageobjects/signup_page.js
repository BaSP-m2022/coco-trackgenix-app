/* eslint-disable no-undef */
class SignupPage {
  get h2_signUp() {
    return $('#root > div > div > div > div.formEmployee_formContainer__2w_8O > div > h2');
  }

  get div_field_firstName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(1)'
    );
  }
  get div_field_lastName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(2)'
    );
  }
  get div_field_phone() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(3)'
    );
  }
  get div_field_email() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(4)'
    );
  }
  get div_field_password() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(5)'
    );
  }
  get div_field_active() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX'
    );
  }

  get placeholder_firstName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(1) > input'
    );
  }
  get placeholder_phone() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(3) > input'
    );
  }
  get placeholder_password() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(5) > input'
    );
  }
  get placeholder_lastName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(2) > input'
    );
  }
  get placeholder_email() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(4) > input'
    );
  }
  get placeholder_active() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > select'
    );
  }
  get placeholder_active_true() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > select > option:nth-child(2)'
    );
  }
  get placeholder_active_false() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > select > option:nth-child(3)'
    );
  }

  get btn_create() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.employees_containerBtn__3oxVC > button:nth-child(1)'
    );
  }
  get btn_return() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.employees_containerBtn__3oxVC > button:nth-child(2)'
    );
  }
  get modal_confirm() {
    return $(
      '#root > div > div > div > div.modal_modalOverlay__1jXdD > div > div:nth-child(3) > button:nth-child(1)'
    );
  }
  get modal_cancel() {
    return $(
      '#root > div > div > div > div.modal_modalOverlay__1jXdD > div > div:nth-child(3) > button:nth-child(2)'
    );
  }
  get modal_btn_success() {
    return $(
      '#root > div > div > div > div.modal_modalOverlay__1jXdD > div > div:nth-child(3) > button.employees_modalEmployeeBtn__-7PeI'
    );
  }

  get error_msg_name() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(1) > p'
    );
  }
  get error_msg_lastName() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(2) > p'
    );
  }
  get error_msg_phone() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(3) > p'
    );
  }
  get error_msg_email() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(4) > p'
    );
  }
  get error_msg_password() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(5) > p'
    );
  }
  get error_msg_active() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > p'
    );
  }

  get error_msg_name_02() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(1) > p'
    );
  }
  get error_msg_lastName_02() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(2) > p'
    );
  }
  get error_msg_phone_02() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(3) > p'
    );
  }
  get error_msg_email_02() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(4) > p'
    );
  }
  get error_msg_password_02() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div:nth-child(5) > p'
    );
  }
  get error_msg_active_02() {
    return $(
      '#root > div > div > div > div.formEmployee_formContainer__2w_8O > form > div.formEmployee_inputsColumns__26M38 > div.dropdown_container__3t7mX > p'
    );
  }

  async clickFields(firstName, lastName, phone, email, password) {
    await this.placeholder_firstName.setValue(firstName);
    await this.placeholder_lastName.setValue(lastName);
    await this.placeholder_phone.setValue(phone);
    await this.placeholder_email.setValue(email);
    await this.placeholder_password.setValue(password);
    await this.placeholder_active.click();
    await this.placeholder_active_true.click();
  }
  async create() {
    await this.btn_create.click();
  }
  async clickConfirm() {
    await this.modal_confirm.click();
  }
  async clickSuccess() {
    await this.modal_btn_success.click();
  }
}

module.exports = new SignupPage();
