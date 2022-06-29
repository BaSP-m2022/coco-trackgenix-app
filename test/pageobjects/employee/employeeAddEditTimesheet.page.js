class employeeAddEditTimesheet {
  get titleCard() {
    return $('//*[@id="root"]/div/div/div/div[2]/h2');
  }
  get assignedEmployeeDDM() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[1]/div[1]/select');
  }
  get selectedProjectDDM() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[1]/div[2]/select');
  }
  get selectedTaskDDM() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[1]/div[3]/select');
  }
  get startDateField() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[2]/div[1]/div/input');
  }
  get endDateField() {
    return $('//*[@id="root"]/div/div/div/form/div[1]/div[2]/div[2]/div/input');
  }

  get editBtn() {
    return $('//*[@id="root"]/div/div/div/form/div[2]/div/button[1]');
  }
  get returnEditBtn() {
    return $('//*[@id="root"]/div/div/div/form/div[2]/div/button[2]');
  }

  get confirmBtn() {
    return $('//*[@id="root"]/div/div/div/div[3]/div/div[2]/button[1]');
  }
  get cancelBtn() {
    return $('//*[@id="root"]/div/div/div/div[3]/div/div[2]/button[2]');
  }
  get okBtn() {
    return $('//*[@id="root"]/div/div/div/div[3]/div/div[2]/button[2]');
  }

  get createBtn() {
    return $('//*[@id="root"]/div/div/div/form/div[2]/button[1]');
  }
  get returnCreateBtn() {
    return $('//*[@id="root"]/div/div/div/form/div[2]/button[2]');
  }

  async clickOn(btnName) {
    switch (btnName) {
      case 'edit':
        await this.editBtn.click();
        break;
      case 'create':
        await this.createBtn.click();
        break;
      case 'returnE':
        await this.returnEditBtn.click();
        break;
      case 'returnC':
        await this.returnCreateBtn.click();
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

  async editDDM(DDMName, indexValue) {
    switch (DDMName) {
      case 'employee':
        this.assignedEmployeeDDM.selectByIndex(indexValue);
        break;
      case 'project':
        this.selectedProjectDDM.selectByIndex(indexValue);
        break;
      case 'task':
        this.selectedTaskDDM.selectByIndex(indexValue);
        break;
    }
  }

  async setDate(dateField, dateValue) {
    const dateObj = new Date(dateValue);
    switch (dateField) {
      case 'start':
        this.startDateField.setValue(dateObj);
        break;
      case 'end':
        this.endDateField.setValue(dateObj);
        break;
    }
  }

  // setStartDate(date) {
  //   this.startDateField.waitForClickable({ timeout: browser.config.timeOutValue });
  //   this.startDateField.setValue(date);
  //   browser.execute(() =>
  //     document
  //       .querySelector(
  //         'body > div.md-datepicker-dialog.md-theme-default > div.md-datepicker-body > div.md-dialog-actions.md-datepicker-body-footer > button > div > div'
  //       )
  //       .click()
  //   );
  // }
  // async setEndDate(date) {
  //   await this.endDateField.waitForClickable({ timeout: browser.config.timeOutValue });
  //   await this.endDateField.setValue(date);
  //   await browser.execute(() =>
  //     document
  //       .querySelector(
  //         'body > div.md-datepicker-dialog.md-theme-default > div.md-datepicker-body > div.md-dialog-actions.md-datepicker-body-footer > button > div > div'
  //       )
  //       .click()
  //   );
  // }

  // async editDateField (dateField, dateToInput) {
  //     switch (dateField) {
  //         case 'start':
  //             this.startDateField.
  //             break;
  //     }
  // }
}

module.exports = new employeeAddEditTimesheet();
