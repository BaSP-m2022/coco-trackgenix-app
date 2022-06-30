/* eslint-disable no-dupe-class-members */
/* eslint-disable no-undef */
class HomePage {
  get menuH() {
    return $('#root > div > header > div > button');
  }
  get xMenu() {
    return $('#root > div > header > div.header_background__3_lNh > nav > button');
  }
  get backgroundMenu() {
    return $('#root > div > header > div.header_background__3_lNh');
  }
  get footer() {
    return $('#root > div > div > div > section');
  }
  get aboutUs() {
    return $('#root > div > div > div > main > section.home_about__jl4Ko > div > h2');
  }

  get btnSignUp() {
    return $('#root > div > header > div > div > a:nth-child(1)');
  }
  get btnNavigation() {
    return $('#root > div > header > div > div > a:nth-child(2)');
  }

  get img_01() {
    return $('#root > div > div > div > main > section.home_assets__3WjuV > div:nth-child(1)');
  }
  get img_02() {
    return $('#root > div > div > div > main > section.home_assets__3WjuV > div:nth-child(2)');
  }
  get img_03() {
    return $('#root > div > div > div > main > section.home_assets__3WjuV > div:nth-child(3)');
  }
  get img_04() {
    return $('#root > div > div > div > main > section.home_assets__3WjuV > div:nth-child(4)');
  }
  get img_05() {
    return $('#root > div > div > div > main > section.home_assets__3WjuV > div:nth-child(5)');
  }
  get img_06() {
    return $(
      '#root > div > div > div > main > section.home_about__jl4Ko > div > div:nth-child(3) > img'
    );
  }
  get img_07() {
    return $(
      '#root > div > div > div > main > section.home_about__jl4Ko > div > div:nth-child(4) > img'
    );
  }

  get paragraph_01() {
    return $('#root > div > div > div > main > section.home_trackgenix__omOC_ > p');
  }
  get paragraph_02() {
    return $('#root > div > div > div > main > section.home_cards__1hIpn > div:nth-child(1)');
  }
  get paragraph_03() {
    return $('#root > div > div > div > main > section.home_cards__1hIpn > div:nth-child(2)');
  }
  get paragraph_04() {
    return $(
      '#root > div > div > div > main > section.home_about__jl4Ko > div > div:nth-child(3) > p'
    );
  }
  get paragraph_05() {
    return $(
      '#root > div > div > div > main > section.home_about__jl4Ko > div > div:nth-child(4) > p'
    );
  }
  get paragraph_06() {
    return $('#root > div > footer > div > p:nth-child(2)');
  }
  get paragraph_07() {
    return $('#root > div > footer > div > p:nth-child(3)');
  }

  get column_ul_Products() {
    return $('#root > div > div > div > section > div:nth-child(1) > ul');
  }
  get column_ul_Company() {
    return $('#root > div > div > div > section > div:nth-child(3) > ul');
  }
  get column_ul_support() {
    return $('#root > div > div > div > section > div:nth-child(5) > ul');
  }

  async btnSignUpClick() {
    await this.btnSignUp.click();
  }
}

module.exports = new HomePage();
