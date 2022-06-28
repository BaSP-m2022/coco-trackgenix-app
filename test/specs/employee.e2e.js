const homePage = require('../pageobjects/home.page');
const loginPage = require('../pageobjects/logIn.page');
const signUpPage = require('../pageobjects/signUp.page');
const employeeInfoPage = require('../pageobjects/employee/employeePersonalInfo.page');


describe('Flow for admin user', () => {
   
    it('Open browser', () => {
        browser.open('https://coco-trackgenix-app.vercel.app/home');
    });

    it('Go to signup page', () => {
        homePage.clickOn('signup');
        const titleCard = await signUpPage.titleCard.getText();
        await expect(titleCard).toBe('Sign Up');
    });

    it('Fill all fields and create user', () => {
        signUpPage.fillInput('name', 'Kaladin');
        signUpPage.fillInput('surname', 'Stormblessed');
        signUpPage.fillInput('phone', '1234567890');
        signUpPage.fillInput('email', 'kaladinthepaladin@urithiru.org');
        signUpPage.fillInput('password', 'bridge4SadBoi');
        signUpPage.fillInput('active', 'true');
        signUpPage.clickOn('create');
        signUpPage.confirmationPopUp.waitForDisplayed(3000);
        signUpPage.clickOn('confirm');
        signUpPage.resultModalTxt.waitForDisplayed(3000);
        const resTxt = signUpPage.resultModalTxt.getText();
        await expect(resTxt).toBe('Employee has been created!');
    });

    it('')
});