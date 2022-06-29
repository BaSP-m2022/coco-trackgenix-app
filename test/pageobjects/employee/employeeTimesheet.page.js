class employeeTimesheetPage {
  get toProjectBtn() {
    return $('//*[@id="root"]/div/div/nav/ul/li[1]/a');
  }
  get toTimesheetbtn() {
    return $('//*[@id="root"]/div/div/nav/ul/li[2]/a');
  }
  get personalInfoBtn() {
    return $('//*[@id="root"]/div/div/nav/ul/li[3]/a');
  }
  get addTimesheetBtn() {
    return $('//*[@id="root"]/div/div/section/button');
  }

  async editElementGetPath(elementNr) {
    const firstHalf = '//*[@id="root"]/div/div/section/div[2]/table/tbody/tr[';
    const secondHalf = ']/td[6]/button[1]';
    const res = await firstHalf.concat(elementNr, secondHalf);
    return res;
  }

  async deleteElementGetPath(elementNr) {
    const firstHalf = '//*[@id="root"]/div/div/section/div[2]/table/tbody/tr[';
    const secondHalf = ']/td[6]/button[2]';
    const res = await firstHalf.concat(elementNr, secondHalf);
    return res;
  }

  async clickOnElementFunction(elementNr, DelEd) {
    var itemPath;
    if (DelEd == 'delete') {
      itemPath = await this.deleteElementGetPath(elementNr);
    } else if (DelEd == 'edit') {
      itemPath = await this.editElementGetPath(elementNr);
    }
    const item = await $(itemPath);
    await item.click();
  }

  async clickOn(dirName) {
    switch (dirName) {
      case 'personal':
        await this.personalInfoBtn.click();
        break;
      case 'timesheet':
        await this.toTimesheetbtn.click();
        break;
      case 'projects':
        await this.toProjectBtn.click();
        break;
    }
  }

  async clickOnAdd() {
    await this.addTimesheetBtn.click();
  }
}

module.exports = new employeeTimesheetPage();
