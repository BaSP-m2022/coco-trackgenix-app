/* eslint-disable no-undef */
class LoginPage {
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

  get logo() {
    return $('#root > div > div > div > div > div');
  }

  get paragraph_01() {
    return $('#root > div > footer > div > p:nth-child(2)');
  }
  get paragraph_02() {
    return $('#root > div > footer > div > p:nth-child(3)');
  }

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
  async asd() {
    await this.asd.setValue(asd);
  }
}

module.exports = new LoginPage();
