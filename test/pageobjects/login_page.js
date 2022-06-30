/* eslint-disable no-undef */
class LoginPage {
  get h2_login() {
    return $('#root > div > div > div > div.login_formContainer__3cyuE > div > h2');
  }
  get div_email() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(1)'
    );
  }
  get div_password() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(2)'
    );
  }
  get input_email() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(1) > input'
    );
  }
  get input_password() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(2) > input'
    );
  }
  get btn_login() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div.login_loginBtn__20UQA > button'
    );
  }

  get error_msg_email() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(1) > p'
    );
  }
  get error_msg_password() {
    return $(
      '#root > div > div > div > div.login_formContainer__3cyuE > form > div:nth-child(1) > div:nth-child(2) > p'
    );
  }

  async asd() {
    await this.asd.setValue(asd);
  }
}

module.exports = new LoginPage();
