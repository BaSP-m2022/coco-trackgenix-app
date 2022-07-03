/* eslint-disable no-undef */
class General {
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
  get sidebar() {
    return $('#root > div > div > nav');
  }

  get logo() {
    return $('#root > div > div > section > div.logo_container__YUs9e > img');
  }

  get paragraph_01() {
    return $('#root > div > footer > div > p:nth-child(2)');
  }
  get paragraph_02() {
    return $('#root > div > footer > div > p:nth-child(3)');
  }
  get link_project() {
    return $('#root > div > div > nav > div.navBar_userInfo__11FpW > img');
  }
  get link_timesheet() {
    return $('#root > div > div > nav > ul > li:nth-child(3) > a');
  }
  get link_personalInf() {
    return $('#root > div > div > nav > ul > li:nth-child(3) > a');
  }
  get link_employee() {
    return $('#root > div > div > nav > ul > li:nth-child(2) > a');
  }
  get link_task() {
    return $('#root > div > div > nav > ul > li:nth-child(4) > a');
  }
  get link_admins() {
    return $('#root > div > div > nav > ul > li:nth-child(5) > a');
  }
  get link_superAdmin() {
    return $('#root > div > div > nav > ul > li:nth-child(6) > a');
  }
}

module.exports = new General();
