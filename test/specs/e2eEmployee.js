/* eslint-disable no-undef */
const homePage = require('../pageobjects/homePage');
const logInPage = require('../pageobjects/logInPage');
const signUpPage = require('../pageobjects/signUpPage');
// const loginPage = require('../pageobjects/logInPage');
// const signUpPage = require('../pageobjects/signUpPage');
// const employeeProjectsPage = require('../pageobjects/employee/employeeProjectsPage');
// const employeeAddNewProjectPage = require('../pageobjects/employee/employeeAddNewProjectPage');
// const employeeEditProjectPage = require('../pageobjects/employee/employeeEditProjectPage');
// const employeeTimesheetsPage = require('../pageobjects/employee/employeeTimesheetsPage');
// const employeeAddNewTimesheetPage = require('../pageobjects/employee/employeeAddNewTimesheetPage');
// const employeeEditTimesheetPage = require('../pageobjects/employee/employeeEditTimesheetPage');
// const employeePersonalInfoPage = require('../pageobjects/employee/employeePersonalInfoPage');
// const employeeEditPersonalInfoPage = require('../pageobjects/employee/employeeEditPersonalInfoPage');

describe('Simple Employee Flow', () => {
  beforeAll('Open Browser', () => {
    browser.url('https://coco-trackgenix-app.vercel.app/home');
  });

  it('HomePage Header components check', async () => {
    await expect(homePage.headerButtonBurguer).toBeDisplayed();
    await expect(homePage.headerButtonBurguer).toBeClickable();

    await expect(homePage.headerSearchBox).toBeDisplayed();

    await expect(homePage.headerButtonSignUp).toBeDisplayed();
    await expect(homePage.headerButtonSignUp).toBeClickable();

    await expect(homePage.headerButtonLogIn).toBeDisplayed();
    await expect(homePage.headerButtonLogIn).toBeClickable();
  });

  it('HomePage footer components check', async () => {
    await expect(homePage.footerIconLinkFb).toBeDisplayed();
    await expect(homePage.footerIconLinkFb).toBeClickable();

    await expect(homePage.footerIconLinkGh).toBeDisplayed();
    await expect(homePage.footerIconLinkGh).toBeClickable();

    await expect(homePage.footerIconLinkIg).toBeDisplayed();
    await expect(homePage.footerIconLinkIg).toBeClickable();

    await expect(homePage.footerIconLinkIn).toBeDisplayed();
    await expect(homePage.footerIconLinkIn).toBeClickable();

    await expect(homePage.footerIconLinkTw).toBeDisplayed();
    await expect(homePage.footerIconLinkTw).toBeClickable();

    // await expect(homePage.footerListCompanyItemBlog).toBeDisplayed();
    // await expect(homePage.footerListCompanyItemBlog).toBeClickable();

    // await expect(homePage.footerListCompanyItemClients).toBeDisplayed();
    // await expect(homePage.footerListCompanyItemClients).toBeClickable();

    // await expect(homePage.footerListCompanyItemInformation).toBeDisplayed();
    // await expect(homePage.footerListCompanyItemInformation).toBeClickable();

    // await expect(homePage.footerListCompanyItemResource).toBeDisplayed();
    // await expect(homePage.footerListCompanyItemResource).toBeClickable();

    // await expect(homePage.footerListProductItemDownload).toBeDisplayed();
    // await expect(homePage.footerListProductItemDownload).toBeClickable();

    // await expect(homePage.footerListProductItemExtras).toBeDisplayed();
    // await expect(homePage.footerListProductItemExtras).toBeClickable();

    // await expect(homePage.footerListProductItemFuncionalities).toBeDisplayed();
    // await expect(homePage.footerListProductItemFuncionalities).toBeClickable();

    // await expect(homePage.footerListProductItemIntegration).toBeDisplayed();
    // await expect(homePage.footerListProductItemIntegration).toBeClickable();

    // await expect(homePage.footerListSupportItemAPI).toBeDisplayed();
    // await expect(homePage.footerListSupportItemAPI).toBeClickable();

    // await expect(homePage.footerListSupportItemContact).toBeDisplayed();
    // await expect(homePage.footerListSupportItemContact).toBeClickable();

    // await expect(homePage.footerListSupportItemHelp).toBeDisplayed();
    // await expect(homePage.footerListSupportItemHelp).toBeClickable();

    // await expect(homePage.footerListSupportItemTutorials).toBeDisplayed();
    // await expect(homePage.footerListSupportItemTutorials).toBeClickable();

    //Links not implemented

    await expect(homePage.footerTextPlace).toBeDisplayed();
    await expect(homePage.footerTextRights).toBeDisplayed();
  });

  it('HomePage Sidebar components check', async () => {
    await homePage.clickHeaderButtonBurguer();

    await expect(homePage.sidebarIconCross).toBeDisplayed();
    await expect(homePage.sidebarIconCross).toBeClickable();

    await expect(homePage.sidebarTitleMenu).toBeDisplayed();

    await expect(homePage.sidebarItemReports).toBeDisplayed();
    await expect(homePage.sidebarItemReports).toBeClickable();

    await expect(homePage.sidebarItemTrackgenix).toBeDisplayed();
    await expect(homePage.sidebarItemTrackgenix).toBeClickable();

    await expect(homePage.sidebarItemResources).toBeDisplayed();
    await expect(homePage.sidebarItemResources).toBeClickable();

    await expect(homePage.sidebarTitleContactUs).toBeDisplayed();
    await expect(homePage.sidebarTextContactUs).toBeDisplayed();
    await expect(homePage.sidebarTextInfoMail).toBeDisplayed();
    await expect(homePage.sidebarTextInfoAddress).toBeDisplayed();

    await homePage.clickSidebarIconCross();
  });

  it('Home Page components check', async () => {
    await expect(homePage.logo).toBeDisplayed();
    await expect(homePage.pageContainer).toBeDisplayed();
  });

  it('Cliclk on LogIn button', async () => {
    await expect(homePage.headerButtonLogIn).toBeDisplayed();
    await expect(homePage.headerButtonLogIn).toBeClickable();
    await homePage.clickHeaderButtonLogIn();
  });

  it('Failed LogIn attempt with empty fields', async () => {
    await expect(logInPage.labelEmailnput).toBeDisplayed();
    await expect(logInPage.labelPasswordInput).toBeDisplayed();
    await logInPage.clickLogInButtonLogIn();
    await expect(logInPage.labelEmailErrorMsg).toBeDisplayed();
    await expect(logInPage.labelPasswordErrorMsg).toBeDisplayed();
  });

  it('Failed LogIn attempt with wrongly filled fields', async () => {
    await expect(logInPage.labelEmailnput).toBeDisplayed();
    await expect(logInPage.labelPasswordInput).toBeDisplayed();
    await logInPage.fillLogInForm('asdf', 'asdf');
    await logInPage.clickLogInButtonLogIn();
    await expect(logInPage.labelEmailErrorMsg).toBeDisplayed();
    await expect(logInPage.labelPasswordErrorMsg).toBeDisplayed();

    await logInPage.clickHeaderButtonHome();
  });

  //   it('Succesful LogIn attempt', async () => {
  //     await expect(logInPage.labelEmailnput).toBeDisplayed();
  //     await expect(logInPage.labelPasswordInput).toBeDisplayed();
  //     await logInPage.fillLogInForm('TestEmployee', 'Test1234');
  //     await logInPage.clickLogInButtonLogIn();
  //   });

  // Not implemented

  it('Cliclk on SignUp button', async () => {
    await expect(homePage.headerButtonSignUp).toBeDisplayed();
    await expect(homePage.headerButtonSignUp).toBeClickable();
    await homePage.clickHeaderButtonSignUp();
  });

  it('Failed SignUp attempt with empty fields', async () => {
    await expect(signUpPage.labelNameInput).toBeDisplayed();
    await expect(signUpPage.labelLastNameInput).toBeDisplayed();
    await expect(signUpPage.labelPhoneInput).toBeDisplayed();
    await expect(signUpPage.labelEmailInput).toBeDisplayed();
    await expect(signUpPage.labelPasswordInput).toBeDisplayed();
    await expect(signUpPage.dropdownsActive).toBeDisplayed();

    await signUpPage.clickSignUpButtonCreate();

    await expect(signUpPage.labelNameErrorMsg).toBeDisplayed();
    await expect(signUpPage.labelLastNameErrorMsg).toBeDisplayed();
    await expect(signUpPage.labelPhoneErrorMsg).toBeDisplayed();
    await expect(signUpPage.labelEmailErrorMsg).toBeDisplayed();
    await expect(signUpPage.labelPasswordErrorMsg).toBeDisplayed();
    await expect(signUpPage.dropdownsActiveErrorMsg).toBeDisplayed();
  });

  it('Failed SignUp attempt wrongly filled fields', async () => {
    await expect(signUpPage.labelNameInput).toBeDisplayed();
    await expect(signUpPage.labelLastNameInput).toBeDisplayed();
    await expect(signUpPage.labelPhoneInput).toBeDisplayed();
    await expect(signUpPage.labelEmailInput).toBeDisplayed();
    await expect(signUpPage.labelPasswordInput).toBeDisplayed();
    await expect(signUpPage.dropdownsActive).toBeDisplayed();

    await signUpPage.fillSignUpForm('123', '123', '1234', 'asdf', 'asdf');

    await expect(signUpPage.labelNameErrorMsg).toBeDisplayed();
    await expect(signUpPage.labelLastNameErrorMsg).toBeDisplayed();
    await expect(signUpPage.labelPhoneErrorMsg).toBeDisplayed();
    await expect(signUpPage.labelEmailErrorMsg).toBeDisplayed();
    await expect(signUpPage.labelPasswordErrorMsg).toBeDisplayed();

    await signUpPage.clickSignUpButtonReturn();
  });

  //   it('Succesful SignUp attempt', async () => {
  //     await expect(signUpPage.labelNameInput).toBeDisplayed();
  //     await expect(signUpPage.labelLastNameInput).toBeDisplayed();
  //     await expect(signUpPage.labelPhoneInput).toBeDisplayed();
  //     await expect(signUpPage.labelEmailInput).toBeDisplayed();
  //     await expect(signUpPage.labelPasswordInput).toBeDisplayed();
  //     await expect(signUpPage.dropdownsActive).toBeDisplayed();

  //     await signUpPage.clickDropdownsActive();
  //     await signUpPage.clickDropdownsActiveTrue();
  //     await signUpPage.clickSignUpButtonCreate();

  //     await logInPage.fillLogInForm('Test', 'Employee', '1234567891', 'Test@mail.com', 'abcd1234');

  //     await signUpPage.clickHeaderButtonSignUp();
  //   });

  // Not implemented
});
