class homePage {
  get loginBtn() {
    return $('//*[@id="root"]/div/header/div/div/a[2]');
  }
  get signUpBtn() {
    return $('//*[@id="root"]/div/header/div/div/a[1]');
  }

  async clickOn(btnName) {
    switch (btnName) {
      case 'login':
        await this.navBtn.click();
        break;
      case 'signup':
        await this.signUpBtn.click();
    }
  }
}

module.exports = new homePage();
