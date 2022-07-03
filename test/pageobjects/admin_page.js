/* eslint-disable no-dupe-class-members */
/* eslint-disable no-undef */
class AdminPage {
  get h2_Admin() {
    return $('#root > div > div > section > h2');
  }

  get add_admin() {
    return $('#root > div > div > section > div:nth-child(3) > button');
  }

  get input_name() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(1) > input'
    );
  }
  get input_email() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(3) > input'
    );
  }
  get input_lastName() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(2) > input'
    );
  }
  get input_password() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(4) > input'
    );
  }
  get input_active() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div.dropdown_container__3t7mX > select'
    );
  }
  get btn_accept() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_buttonsContainer__Fgpi8 > button:nth-child(1)'
    );
  }
  get btn_cancel() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_buttonsContainer__Fgpi8 > button:nth-child(2)'
    );
  }
  get btn_delete_admin() {
    return $(
      '#root > div > div > section > div:nth-child(3) > div > table > tbody > tr:nth-child(1) > td.table_buttonTd__1cGKe > button:nth-child(2)'
    );
  }
  get btn_edit_admin() {
    return $(
      '#root > div > div > section > div:nth-child(3) > div > table > tbody > tr:nth-child(1) > td.table_buttonTd__1cGKe > button:nth-child(1)'
    );
  }

  get modal_create_admin() {
    return $('#root > div > div > div > div.modal_modalOverlay__1jXdD > div');
  }
  get modal_btn_confirm() {
    return $(
      '#root > div > div > div > div.modal_modalOverlay__1jXdD > div > div:nth-child(3) > button:nth-child(1)'
    );
  }
  get modal_btn_cancel() {
    return $(
      '#root > div > div > div > div.modal_modalOverlay__1jXdD > div > div:nth-child(3) > button:nth-child(2)'
    );
  }
  get table_admin() {
    return $('#root > div > div > section > div:nth-child(3) > div > table');
  }
  get table_head_admin() {
    return $('#root > div > div > section > div:nth-child(3) > div > table > thead');
  }

  get error_msg_name() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(1) > p'
    );
  }
  get error_msg_lastName() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(2) > p'
    );
  }
  get error_msg_phone() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(3) > p'
    );
  }
  get error_msg_email() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(4) > p'
    );
  }
  get error_msg_password() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div:nth-child(5) > p'
    );
  }
  get error_msg_active() {
    return $(
      '#root > div > div > div > div.admins_formContainer__3kCmu > form > div.admins_inputsColumns__1mTem > div.dropdown_container__3t7mX > p'
    );
  }

  async add() {
    await this.add_admin.click();
  }
  async btnAccept() {
    await this.btn_accept.click();
  }
  async btnCancel() {
    await this.btn_cancel.click();
  }
}

module.exports = new AdminPage();
