class employeeAddEditProjectPage {
  get titleCard() {
    return $('//*[@id="root"]/div/div/div/h2');
  }
  get projectNameInput() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[1]/div[1]/input');
  }
  get descriptionInput() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[1]/div[2]/input');
  }
  get startDateField() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[1]/div[3]/input');
  }
  get endDateField() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[1]/div[4]/input');
  }
  get clientNameInput() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[2]/div[1]/input');
  }
  get setActiveDDM() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[2]/div[2]/select');
  }
  get assignedEmployeeDDM() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[2]/div[3]/select');
  }
  get adminInput() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[2]/div[4]/input');
  }
  get confBtn() {
    return $('//*[@id="root"]/div/div/div/form/div[2]/button[1]');
  }
  get retCanBtn() {
    return $('//*[@id="root"]/div/div/div/form/div[2]/button[2]');
  }
  get modalConfirmBtn() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/div/div[2]/button[1]');
  }
  get modalCancelBtn() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/div/div[2]/button[2]');
  }
  get modalOkBtn() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/div/button[2]');
  }
  get modalTitleTxt() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/p');
  }
  get confirmationModalTitle() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/h2');
  }

  async clickOn(btnName) {
    switch (btnName) {
      case 'edit':
        await this.confBtn.click();
        break;
      case 'create':
        await this.confBtn.click();
        break;
      case 'returnE':
        await this.retCanBtn.click();
        break;
      case 'confirm':
        await this.modalConfirmBtn.click();
        break;
      case 'cancel':
        await this.modalCancelBtn.click();
        break;
      case 'ok':
        await this.modalOkBtn.click();
        break;
    }
  }

  async fillInput(inputName, inputValue) {
    switch (inputName) {
      case 'name':
        await this.projectNameInput.setValue(inputValue);
        break;
      case 'description':
        await this.descriptionInput.setValue(inputValue);
        break;
      case 'client':
        await this.clientNameInput.setValue(inputValue);
        break;
      case 'active':
        // eslint-disable-next-line no-constant-condition
        if ((inputValue = 'true')) {
          await this.activeInput.selectByIndex(1);
        } else {
          await this.activeInput.selectByIndex(2);
        }
        break;
      case 'admin':
        await this.adminInput.setValue(inputValue);
        break;
      case 'start':
        await this.startDateField.setValue(inputValue);
        break;
      case 'end':
        await this.endDateField.setValue(inputValue);
        break;
    }
  }

  async editDDM(DDMName, indexValue) {
    switch (DDMName) {
      case 'employee':
        this.assignedEmployeeDDM.selectByIndex(indexValue);
        break;
      case 'active':
        this.setActiveDDM.selectByIndex(indexValue);
        break;
      case 'task':
        this.selectedTaskDDM.selectByIndex(indexValue);
        break;
    }
  }
}

module.exports = new employeeAddEditProjectPage();
