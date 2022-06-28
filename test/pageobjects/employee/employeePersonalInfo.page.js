class employeePersonalInfoPage {
    get toProjectBtn() {return $('//*[@id="root"]/div/div/nav/ul/li[1]/a')};
    get toTimesheetbtn() {return $('//*[@id="root"]/div/div/nav/ul/li[2]/a')};
    get personalInfoBtn() {return $('//*[@id="root"]/div/div/nav/ul/li[3]/a')};
    //*[@id="root"]/div/div/section/div[2]/table/tbody/tr[1]/td[7]/button[2]
};

module.exports = new employeePersonalInfoPage();