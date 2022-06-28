class projectPage {
    get toTimesheetBtn() {return $('//*[@id="root"]/div/div/nav/ul/li[3]/a')};
    get toSuperAdminBtn() {return $('//*[@id="root"]/div/div/nav/ul/li[6]/a')};
    get toTaskBtn() {return $('//*[@id="root"]/div/div/nav/ul/li[4]/a')};
    get toEmployeebtn() {return $('//*[@id="root"]/div/div/nav/ul/li[2]/a')};
    get toAdminBtn() {return $('//*[@id="root"]/div/div/nav/ul/li[5]/a')};
    get toProjectBtn() {return $('//*[@id="root"]/div/div/nav/ul/li[1]/a')};
};

module.exports = new projectPage();