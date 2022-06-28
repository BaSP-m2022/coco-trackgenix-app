/* eslint-disable no-undef */
class NavigationPage {
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

  get btn_employee() {
    return $(
      '#root > div > div > section > div.navigation_rowConteiner__2y226 > div:nth-child(1) > button:nth-child(1)'
    );
  }
  get btn_superAdmin() {
    return $(
      '#root > div > div > section > div.navigation_rowConteiner__2y226 > div:nth-child(1) > button:nth-child(2)'
    );
  }
  get btn_timeSheet() {
    return $(
      '#root > div > div > section > div.navigation_rowConteiner__2y226 > div:nth-child(1) > button:nth-child(3)'
    );
  }
  get btn_project() {
    return $(
      '#root > div > div > section > div.navigation_rowConteiner__2y226 > div:nth-child(2) > button:nth-child(1)'
    );
  }
  get btn_admin() {
    return $(
      '#root > div > div > section > div.navigation_rowConteiner__2y226 > div:nth-child(2) > button:nth-child(2)'
    );
  }
  get btn_task() {
    return $(
      '#root > div > div > section > div.navigation_rowConteiner__2y226 > div:nth-child(2) > button:nth-child(3)'
    );
  }

  async asd() {
    await this.asd.setValue(asd);
  }
}

module.exports = new NavigationPage();
