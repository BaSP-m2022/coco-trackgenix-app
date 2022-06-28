class loginPage {
    get emailInput() {return $('//*[@id="root"]/div/div/div/div[2]/form/div[1]/div[1]/input')};
    get passwordInput() {return $('//*[@id="root"]/div/div/div/div[2]/form/div[1]/div[2]/input')};

    get homeBtn() {return $('//*[@id="root"]/div/header/div/a')};
    get loginBtn() {return $('//*[@id="root"]/div/div/div/div[2]/form/div[2]/button')};

    async fillInput (inputName, inputValue) {
        switch (btnName) {
            case 'email':
                await this.emailInput.setValue(inputValue);
                break;
            case 'password':
                await this.passwordInput.setValue(inputValue);
                break;
        };
    };
}

module.exports = new loginPage();