/* eslint-disable no-undef */
class NavigationPage {
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
