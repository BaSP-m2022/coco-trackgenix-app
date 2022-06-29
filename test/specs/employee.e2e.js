/* eslint-disable wdio/no-pause */
const homePage = require('../pageobjects/home.page');
const signUpPage = require('../pageobjects/signUp.page');
const employeeInfoPage = require('../pageobjects/employee/employeePersonalInfo.page');
const employeeEditPersonalInfoPage = require('../pageobjects/employee/employeeEditPersonalInfo.page');
const employeePersonalInfoPage = require('../pageobjects/employee/employeePersonalInfo.page');
const employeeTimesheetPage = require('../pageobjects/employee/employeeTimesheet.page');
const employeeAddEditTimesheetPage = require('../pageobjects/employee/employeeAddEditTimesheet.page');
const employeeProjectsPage = require('../pageobjects/employee/employeeProjects.page');
const employeeAddEditProjectsPage = require('../pageobjects/employee/employeeAddEditProject.page');

describe('Flow for admin user', () => {
  it('Open browser', () => {
    browser.url('https://coco-trackgenix-app.vercel.app/home');
  });

  it('Go to signup page', async () => {
    homePage.clickOn('signup');
    const titleCard = await signUpPage.titleCard.getText();
    await expect(titleCard).toBe('Sign Up');
  });

  it('Fill all fields and create user', async () => {
    await signUpPage.fillInput('name', 'Kaladin');
    await signUpPage.fillInput('surname', 'Stormblessed');
    await signUpPage.fillInput('phone', '1234567890');
    await signUpPage.fillInput('email', 'kaladinthepaladin@urithiru.org');
    await signUpPage.fillInput('password', 'bridge4SadBoi');
    await signUpPage.fillInput('active', 'true');
    await signUpPage.clickOn('create');
    await signUpPage.confirmationPopUp.waitForDisplayed(300);
    await signUpPage.clickOn('confirm');
    await signUpPage.resultModalTxt.waitForDisplayed(300);
    const resTxt = await signUpPage.resultModalTxt.getText();
    await expect(resTxt).toBe('Employee has been created!');
  });

  // it('Check current page title', async () => {
  //   await expect(employeePersonalInfoPage.titleCard).toBeExisting(1000);
  //   await expect(employeePersonalInfoPage.titleCard).toBeEnabled(1000);
  //   await expect(employeePersonalInfoPage.titleCard).toBeDisplayed(1000);
  //   const titleTxt = await employeeInfoPage.titleCard.getText();
  //   await expect(titleTxt).toBe('Personal Information');
  // });

  it('Confirm account creation', async () => {
    await expect(employeePersonalInfoPage.containerTable).toBeExisting(1000);
    await expect(employeePersonalInfoPage.containerTable).toBeEnabled(1000);
    await expect(employeePersonalInfoPage.containerTable).toBeDisplayed(1000);
    const employeeRow = await employeePersonalInfoPage.containerTable.$(':last-child');
    const lastElementEmail = await employeeRow.$('nth-child(3)').getText();
    await expect(lastElementEmail).toBe('kaladinthepaladin@urithiru.org');
  });

  it('Go to edit employee', async () => {
    await employeeInfoPage.clickOnElementFunction('16', 'edit');
    // await expect(employeePersonalInfoPage.titleCard).toBeExisting(1000);
    // await expect(employeePersonalInfoPage.titleCard).toBeEnabled(1000);
    // await expect(employeePersonalInfoPage.titleCard).toBeDisplayed(1000);
    // const titleTxt = await employeeEditPersonalInfoPage.titleCard.getText();
    // await expect(titleTxt).toBe('Edit Employee');
  });

  it('Change some employee fields', async () => {
    await employeeEditPersonalInfoPage.fillInput('surname', 'thePaladin');
    await employeeEditPersonalInfoPage.clickOn('create');
    await employeeEditPersonalInfoPage.confirmationPopUp.waitForDisplayed(3000);
    await signUpPage.clickOn('confirm');
    const resTxt = await employeeEditPersonalInfoPage.resultModalTxt.getText();
    await expect(resTxt).toBe('Employee has been edited!');
    await employeeEditPersonalInfoPage.clickOn('ok');
  });

  it('Delete created employee', async () => {
    // await expect(employeePersonalInfoPage.containerTable).toBeExisting(1000);
    // await expect(employeePersonalInfoPage.containerTable).toBeEnabled(1000);
    // await expect(employeePersonalInfoPage.containerTable).toBeDisplayed(1000);
    await employeeInfoPage.clickOnElementFunction('16', 'delete');
  });

  it('Go to timesheet page', async () => {
    await employeePersonalInfoPage.clickOn('timesheet');
    await expect(employeeTimesheetPage.titleCard).toBeDisplayed(1000);
    const titleTxt = await employeeTimesheetPage.titleCard.getText();
    await expect(titleTxt).toBe('Timesheets');
  });

  it('Click on add timesheet', async () => {
    await employeeTimesheetPage.clickOnAdd();
    await expect(employeeAddEditTimesheetPage.titleCard).toBeDisplayed(1000);
    const titleTxt = await employeeAddEditTimesheetPage.titleCard.getText();
    await expect(titleTxt).toBe('Add New TimeSheet');
  });

  it('Fill all fields for new timesheet', async () => {
    await employeeAddEditTimesheetPage.editDDM('employee', 2);
    await employeeAddEditTimesheetPage.editDDM('project', 2);
    await employeeAddEditTimesheetPage.editDDM('task', 3);
    await employeeAddEditTimesheetPage.setDate('start', '424224');
    await employeeAddEditTimesheetPage.setDate('end', '525224');
    await employeeAddEditTimesheetPage.clickOn('create');
    await expect(employeeAddEditTimesheetPage.confirmBtn).toBeDisplayed(1000);
  });

  it('Confirm msg pop up', async () => {
    await employeeAddEditTimesheetPage.clickOn('confirm');
    browser.pause(3000);
    //had to use browser pause since the xpath for the 'cancel' button and 'ok' button are the same
    await expect(employeeAddEditTimesheetPage.okBtn).toBeDisplayed(1000);
  });

  it('Click on ok', async () => {
    await employeeAddEditTimesheetPage.clickOn('ok');
  });

  it('Back to timesheet main page', async () => {
    await expect(employeeTimesheetPage.titleCard).toBeDisplayed(1000);
    const titleTxt = await employeeTimesheetPage.titleCard.getText();
    await expect(titleTxt).toBe('Timesheets');
  });

  it('Open timesheet to edit', async () => {
    await employeeTimesheetPage.clickOnElementFunction('edit', 5);
    await expect(employeeAddEditTimesheetPage.titleCard).toBeDisplayed(1000);
    const titleTxt = await employeeAddEditTimesheetPage.titleCard.getText();
    await expect(titleTxt).toBe('Edit TimeSheet');
  });

  it('Change timesheet data', async () => {
    await employeeAddEditTimesheetPage.editDDM('employee', 2);
    await employeeAddEditTimesheetPage.editDDM('project', 1);
    await employeeAddEditTimesheetPage.clickOn('edit');
    await employeeAddEditTimesheetPage.clickOn('confirm');
    browser.pause(3000);
    //had to use browser pause since the xpath for the 'cancel' button and 'ok' button are the same
    const modalTitleTxt = $('//*[@id="root"]/div/div/div/div[3]/div/div[1]/p').getText();
    await expect(modalTitleTxt).toBe('Timesheet has been edited!');
    await employeeAddEditTimesheetPage.clickOn('ok');
  });

  it('Back to timesheet main page', async () => {
    await expect(employeeTimesheetPage.titleCard).toBeDisplayed(1000);
    const titleTxt = await employeeTimesheetPage.titleCard.getText();
    await expect(titleTxt).toBe('Timesheets');
  });

  it('Go to project page', async () => {
    await employeeTimesheetPage.clickOn('projects');
    await expect(employeeProjectsPage.titleCard).toBeDisplayed(1000);
    const titleText = await expect(employeeProjectsPage.titleCard).getText();
    await expect(titleText).toBe('Projects');
  });

  it('Click on add new project', async () => {
    await employeeProjectsPage.clickOnAdd();
    await expect(employeeAddEditProjectsPage.titleCard).toHaveTextContaining('New Project');
  });

  it('Fill all fields for a new project', async () => {
    await employeeAddEditProjectsPage.fillInput('name', 'Dimmados');
    await employeeAddEditProjectsPage.fillInput(
      'description',
      'The construction of the second Dimsdale dimadome'
    );
    await employeeAddEditProjectsPage.fillInput(
      'client',
      'DoughDimmadoneOwnerOfTheDimsdaleDimmadome'
    );
    await employeeAddEditProjectsPage.fillInput('active', 'true');
    await employeeAddEditProjectsPage.fillInput(
      'admin',
      'DoughDimmadoneOwnerOfTheDimsdaleDimmadome'
    );
    await employeeAddEditProjectsPage.fillInput('start', '1231237');
    await employeeAddEditProjectsPage.fillInput('end', '1111111');
    await employeeAddEditProjectsPage.editDDM('employee', 3);
    await employeeAddEditProjectsPage.editDDM('active', 2);
    await employeeAddEditProjectsPage.editDDM('task', 4);
    await employeeAddEditProjectsPage.clickOn('confirm');
    await expect(employeeAddEditProjectsPage.confirmationModalTitle).toHaveTextContaining(
      'Project Creation'
    );
    await employeeAddEditProjectsPage.clickOn('confirm');
  });

  it('Click on ok and finish project creation', async () => {
    await expect(employeeAddEditProjectsPage.modalTitleTxt).toBeDisplayed(1000);
    await expect(employeeAddEditProjectsPage.modalTitleTxt).toHaveTextContaining(
      'Project Created!'
    );
    await employeeAddEditProjectsPage.clickOn('ok');
  });
});
