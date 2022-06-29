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
  get btn_home() {
    return $('#root > div > header > div > a');
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
  get instagram() {
    return $('#root > div > footer > div > div > a:nth-child(5)');
  }

  get search() {
    return $('#root > div > header > div > input[type=text]');
  }
  get header() {
    return $('#root > div > header');
  }

  get logo() {
    return $('#root > div > div > div > div > div');
  }

  get paragraph_01() {
    return $('#root > div > footer > div > p:nth-child(2)');
  }
  get paragraph_02() {
    return $('#root > div > footer > div > p:nth-child(3)');
  }

  get modal_create() {
    return $('#root > div > div > div > div.modal_modalOverlay__1jXdD > div');
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

  async clickFields(firstName, phone, password, lastName, email, active) {
    await this.placeholder_firstName.setValue(firstName);
    await this.placeholder_lastName.setValue(lastName);
    await this.placeholder_lastName.setValue(phone);
    await this.placeholder_lastName.setValue(password);
    await this.placeholder_lastName.setValue(email);
    await this.placeholder_lastName.setValue(active);
  }
  async clickConfirm() {
    await this.btn_confirm.click();
  }
  async clickSuccess() {
    await this.modal_btn_success.click();
  }
//   async clickSignUp(firstName) {
//     await this.placeholder_firstName.setValue(firstName);
//   }
}

module.exports = new SignupPage();
