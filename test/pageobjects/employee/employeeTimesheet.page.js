class employeeTimesheetPage {
    get toProjectBtn() {return $('//*[@id="root"]/div/div/nav/ul/li[1]/a')};
    get toTimesheetbtn() {return $('//*[@id="root"]/div/div/nav/ul/li[2]/a')};
    get personalInfoBtn() {return $('//*[@id="root"]/div/div/nav/ul/li[3]/a')};
    get addTimesheetBtn() {return $('//*[@id="root"]/div/div/section/button')};

    async editElementGetPath (elementNr) {
        const firstHalf = '//*[@id="root"]/div/div/section/div[2]/table/tbody/tr[';
        const secondHalf = ']/td[6]/button[1]'
        return await String.concat(firstHalf, elementNr, secondHalf);
    };

    async deleteElementGetPath (elementNr) {
        const firstHalf = '//*[@id="root"]/div/div/section/div[2]/table/tbody/tr[';
        const secondHalf = ']/td[6]/button[2]'
        return await String.concat(firstHalf, elementNr, secondHalf);
    };

    async clickOnElementFunction (elementNr, DelEd) {
        if(DelEd == 'delete'){
            const itemPath = await deleteElementGetPath(elementNr);
        } else if(DelEd == 'edit') {
            const itemPath = await editElementGetPath(elementNr);
        };
        const item = await $(itemPath);
        await item.click();
    };

    async clickOnAdd () {
        await this.addTimesheetBtn.click();
    }
};

module.exports = new employeeTimesheetPage();