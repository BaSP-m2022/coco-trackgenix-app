class signUpPage {
  get nameInput() {
    return $('//*[@id="root"]/div/div/div/div[2]/form/div[1]/div[1]/input');
  }
  get surNameInput() {
    return $('//*[@id="root"]/div/div/div/div[2]/form/div[1]/div[2]/input');
  }
  get phoneInput() {
    return $('//*[@id="root"]/div/div/div/div[2]/form/div[1]/div[3]/input');
  }
  get emailInput() {
    return $('//*[@id="root"]/div/div/div/div[2]/form/div[1]/div[4]/input');
  }
  get passwordInput() {
    return $('//*[@id="root"]/div/div/div/div[2]/form/div[1]/div[5]/input');
  }
  get activeInput() {
    return $('//*[@id="root"]/div/div/div/div[2]/form/div[1]/div[6]/select');
  }

  get confirmBtn() {
    return $('//*[@id="root"]/div/div/div/div[3]/div/div[2]/button[1]');
  }
  get cancelBtn() {
    return $('//*[@id="root"]/div/div/div/div[3]/div/div[2]/button[2]');
  }

  get createBtn() {
    return $('//*[@id="root"]/div/div/div/div[2]/form/div[2]/button[1]');
  }
  get returnBtn() {
    return $('//*[@id="root"]/div/div/div/div[2]/form/div[2]/button[2]');
  }

  get titleCard() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/h2');
  }
  get confirmationPopUp() {
    return $('//*[@id="root"]/div/div/div/div[3]/div');
  }

  get resultModalTxt() {
    return $('//*[@id="root"]/div/div/div/div[3]/div/div[1]/p');
  }
  get okBtn() {
    return $('//*[@id="root"]/div/div/div/div[3]/div/div[2]/button[2]');
  }

  async fillInput(inputName, inputValue) {
    switch (inputName) {
      case 'name':
        await this.nameInput.setValue(inputValue);
        break;
      case 'surname':
        await this.surNameInput.setValue(inputValue);
        break;
      case 'phone':
        await this.phoneInput.setValue(inputValue);
        break;
      case 'email':
        await this.emailInput.setValue(inputValue);
        break;
      case 'password':
        await this.passwordInput.setValue(inputValue);
        break;
      case 'active':
        // eslint-disable-next-line no-constant-condition
        if ((inputValue = 'true')) {
          await this.activeInput.selectByIndex(1);
        } else {
          await this.activeInput.selectByIndex(2);
        }
        break;
    }
  }

  async clickOn(btnName) {
    switch (btnName) {
      case 'create':
        await this.createBtn.click();
        break;
      case 'return':
        await this.returnBtn.click();
        break;
      case 'confirm':
        await this.confirmBtn.click();
        break;
      case 'cancel':
        await this.cancelBtn.click();
        break;
      case 'ok':
        await this.okBtn.click();
        break;
    }
  }
}

module.exports = new signUpPage();
