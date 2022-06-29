/* eslint-disable no-undef */
class homePage {
  //getters

  get headerButtonBurguer() {
    return $('#root > div > header > div > button');
  }
  get headerButtonSignUp() {
    return $('#root > div > header > div > div > a:nth-child(1)');
  }
  get headerButtonLogIn() {
    return $('#root > div > header > div > div > a:nth-child(2)');
  }
  get headerSearchBox() {
    return $('#root > div > header > div > input[type=text]');
  }

  //   get footerListProductItemFuncionalities() {
  //     return $('#root > div > div > div > section > div:nth-child(1) > ul > li:nth-child(1)');
  //   }
  //   get footerListProductItemDownload() {
  //     return $('#root > div > div > div > section > div:nth-child(1) > ul > li:nth-child(2)');
  //   }
  //   get footerListProductItemIntegration() {
  //     return $('#root > div > div > div > section > div:nth-child(1) > ul > li:nth-child(3)');
  //   }
  //   get footerListProductItemExtras() {
  //     return $('#root > div > div > div > section > div:nth-child(1) > ul > li:nth-child(4)');
  //   }

  //   get footerListCompanyItemInformation() {
  //     return $('#root > div > div > div > section > div:nth-child(3) > ul > li:nth-child(1)');
  //   }
  //   get footerListCompanyItemClients() {
  //     return $('#root > div > div > div > section > div:nth-child(3) > ul > li:nth-child(2)');
  //   }
  //   get footerListCompanyItemResource() {
  //     return $('#root > div > div > div > section > div:nth-child(3) > ul > li:nth-child(3)');
  //   }
  //   get footerListCompanyItemBlog() {
  //     return $('#root > div > div > div > section > div:nth-child(3) > ul > li:nth-child(4)');
  //   }

  //   get footerListSupportItemHelp() {
  //     return $('#root > div > div > div > section > div:nth-child(5) > ul > li:nth-child(1)');
  //   }
  //   get footerListSupportItemTutorials() {
  //     return $('#root > div > div > div > section > div:nth-child(5) > ul > li:nth-child(2)');
  //   }
  //   get footerListSupportItemAPI() {
  //     return $('#root > div > div > div > section > div:nth-child(5) > ul > li:nth-child(3)');
  //   }
  //   get footerListSupportItemContact() {
  //     return $('#root > div > div > div > section > div:nth-child(5) > ul > li:nth-child(4)');
  //   }

  //Links not implemented

  get footerIconLinkIn() {
    return $('#root > div > footer > div > div > a:nth-child(1) > img');
  }
  get footerIconLinkFb() {
    return $('#root > div > footer > div > div > a:nth-child(2) > img');
  }
  get footerIconLinkTw() {
    return $('#root > div > footer > div > div > a:nth-child(3) > img');
  }
  get footerIconLinkGh() {
    return $('#root > div > footer > div > div > a:nth-child(4) > img');
  }
  get footerIconLinkIg() {
    return $('#root > div > footer > div > div > a:nth-child(5) > img');
  }
  get footerTextPlace() {
    return $('#root > div > footer > div > p:nth-child(2)');
  }
  get footerTextRights() {
    return $('#root > div > footer > div > p:nth-child(3)');
  }

  get sidebarIconCross() {
    return $('#root > div > header > div.header_background__3_lNh > nav > button');
  }

  get sidebarTitleMenu() {
    return $('#root > div > header > div.header_background__3_lNh > nav > h2');
  }
  get sidebarItemReports() {
    return $('#root > div > header > div.header_background__3_lNh > nav > ul > li:nth-child(1)');
  }
  get sidebarItemTrackgenix() {
    return $('#root > div > header > div.header_background__3_lNh > nav > ul > li:nth-child(2)');
  }
  get sidebarItemResources() {
    return $('#root > div > header > div.header_background__3_lNh > nav > ul > li:nth-child(3)');
  }

  get sidebarTitleContactUs() {
    return $(
      '#root > div > header > div.header_background__3_lNh > nav > div.header_contact__159bh > h3'
    );
  }
  get sidebarTextContactUs() {
    return $(
      '#root > div > header > div.header_background__3_lNh > nav > div.header_contact__159bh > p'
    );
  }
  get sidebarTextInfoMail() {
    return $(
      '#root > div > header > div.header_background__3_lNh > nav > div.header_location__2TvMR > p:nth-child(1)'
    );
  }
  get sidebarTextInfoAddress() {
    return $(
      '#root > div > header > div.header_background__3_lNh > nav > div.header_location__2TvMR > p:nth-child(2)'
    );
  }

  get logo() {
    return $('#root > div > div > div > div');
  }
  get pageContainer() {
    return $('#root > div > div > div > main');
  }

  //Setters

  //methods

  async clickHeaderButtonBurguer() {
    await this.headerButtonBurguer.click();
    browser.pause(4000);
  }
  async clickHeaderButtonSignUp() {
    await this.headerButtonSignUp.click();
    browser.pause(4000);
  }
  async clickHeaderButtonLogIn() {
    await this.headerButtonLogIn.click();
    browser.pause(4000);
  }
  async clickHeaderSearchBox() {
    await this.headerSearchBox.click();
    browser.pause(4000);
  }

  async clickFooterIconLinkIn() {
    await this.footerIconLinkIn.click();
    browser.pause(4000);
  }
  async clickFooterIconLinkFb() {
    await this.footerIconLinkFb.click();
    browser.pause(4000);
  }
  async clickFooterIconLinkTw() {
    await this.footerIconLinkTw.click();
    browser.pause(4000);
  }
  async clickFooterIconLinkGh() {
    await this.footerIconLinkGh.click();
    browser.pause(4000);
  }
  async clickFooterIconLinkIg() {
    await this.footerIconLinkIg.click();
    browser.pause(4000);
  }

  async clickSidebarIconCross() {
    await this.sidebarIconCross.click();
    browser.pause(4000);
  }
  async clickSidebarItemReports() {
    await this.sidebarItemReports.click();
    browser.pause(4000);
  }
  async clickSidebarItemTrackgenix() {
    await this.sidebarItemTrackgenix.click();
    browser.pause(4000);
  }
  async clickSidebarItemResources() {
    await this.sidebarItemResources.click();
    browser.pause(4000);
  }
}
module.exports = new homePage();
