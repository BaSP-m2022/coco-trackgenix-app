/* eslint-disable no-undef */
// const employeeProjectsPage = require('../pageobjects/employeeProjectsPage');
// const employeeAddNewProjectPage = require('../pageobjects/employeeAddNewProjectPage');
// const signUpPage = require('../pageobjects/signUpPage');
const employeeProjectsPage = require('../pageobjects/employee/employeeProjectsPage');
const employeeAddNewProjectPage = require('../pageobjects/employee/employeeAddNewProjectPage');
// const employeeEditProjectPage = require('../pageobjects/employee/employeeEditProjectPage');
// const employeeTimesheetsPage = require('../pageobjects/employee/employeeTimesheetsPage');
// const employeeAddNewTimesheetPage = require('../pageobjects/employee/employeeAddNewTimesheetPage');
// const employeeEditTimesheetPage = require('../pageobjects/employee/employeeEditTimesheetPage');
// const employeePersonalInfoPage = require('../pageobjects/employee/employeePersonalInfoPage');
// const employeeEditPersonalInfoPage = require('../pageobjects/employee/employeeEditPersonalInfoPage');

describe('Simple Employee Flow', () => {
  beforeAll('Open Browser', () => {
    browser.url('https://coco-trackgenix-app.vercel.app/employee/projects');
  });

  it('Employee Project Page Header components check', async () => {
    await expect(employeeProjectsPage.headerButtonHome).toBeDisplayed();
    await expect(employeeProjectsPage.headerButtonHome).toBeClickable();

    await expect(employeeProjectsPage.headerSearchBox).toBeDisplayed();
  });

  it('Employee Project Page footer components check', async () => {
    await expect(employeeProjectsPage.footerIconLinkFb).toBeDisplayed();
    await expect(employeeProjectsPage.footerIconLinkFb).toBeClickable();

    await expect(employeeProjectsPage.footerIconLinkGh).toBeDisplayed();
    await expect(employeeProjectsPage.footerIconLinkGh).toBeClickable();

    await expect(employeeProjectsPage.footerIconLinkIg).toBeDisplayed();
    await expect(employeeProjectsPage.footerIconLinkIg).toBeClickable();

    await expect(employeeProjectsPage.footerIconLinkIn).toBeDisplayed();
    await expect(employeeProjectsPage.footerIconLinkIn).toBeClickable();

    await expect(employeeProjectsPage.footerIconLinkTw).toBeDisplayed();
    await expect(employeeProjectsPage.footerIconLinkTw).toBeClickable();

    await expect(employeeProjectsPage.footerTextPlace).toBeDisplayed();
    await expect(employeeProjectsPage.footerTextRights).toBeDisplayed();
  });

  it('Employee Project Page Sidebar components check', async () => {
    await expect(employeeProjectsPage.sidebarImageUser).toBeDisplayed();
    // await expect(employeeProjectsPage.sidebarImageUser).toBeClickable();

    await expect(employeeProjectsPage.sidebarUserName).toBeDisplayed();
    // await expect(employeeProjectsPage.sidebarUserName).toBeClickable();

    await expect(employeeProjectsPage.sidebarUserRole).toBeDisplayed();
    // await expect(employeeProjectsPage.sidebarUserRole).toBeClickable();

    await expect(employeeProjectsPage.sidebarTitleMenu).toBeDisplayed();

    await expect(employeeProjectsPage.sidebarItemProjects).toBeDisplayed();
    // await expect(employeeProjectsPage.sidebarItemProjects).toBeClickable();

    await expect(employeeProjectsPage.sidebarItemTimesheet).toBeDisplayed();
    // await expect(employeeProjectsPage.sidebarItemTimesheet).toBeClickable();

    await expect(employeeProjectsPage.sidebarItemPersonalnfo).toBeDisplayed();
    // await expect(employeeProjectsPage.sidebarItemPersonalnfo).toBeClickable();
  });

  it('Employee Project Page components check', async () => {
    await expect(employeeProjectsPage.logo).toBeDisplayed();
    await expect(employeeProjectsPage.title).toBeDisplayed();

    await expect(employeeProjectsPage.topButton).toBeDisplayed();
    await expect(employeeProjectsPage.topButton).toBeClickable();

    await expect(employeeProjectsPage.row).toBeDisplayed();

    await expect(employeeProjectsPage.rowTitleName).toBeDisplayed();
    await expect(employeeProjectsPage.rowTitleClientName).toBeDisplayed();
    await expect(employeeProjectsPage.rowTitleAdmins).toBeDisplayed();
    await expect(employeeProjectsPage.rowTitleCreatedAT).toBeDisplayed();
    await expect(employeeProjectsPage.rowTitleDescription).toBeDisplayed();
    await expect(employeeProjectsPage.rowTitleStartDate).toBeDisplayed();
    await expect(employeeProjectsPage.rowTitleEndDate).toBeDisplayed();
    await expect(employeeProjectsPage.rowTitleEmployees).toBeDisplayed();
    await expect(employeeProjectsPage.rowTitleActive).toBeDisplayed();

    await expect(employeeProjectsPage.rowName).toBeDisplayed();
    await expect(employeeProjectsPage.rowClientName).toBeDisplayed();
    await expect(employeeProjectsPage.rowAdmins).toBeDisplayed();
    await expect(employeeProjectsPage.rowCreatedAt).toBeDisplayed();
    await expect(employeeProjectsPage.rowDescription).toBeDisplayed();
    await expect(employeeProjectsPage.rowStartDate).toBeDisplayed();
    await expect(employeeProjectsPage.rowEndDate).toBeDisplayed();
    await expect(employeeProjectsPage.rowActive).toBeDisplayed();

    await expect(employeeProjectsPage.rowEdit).toBeDisplayed();
    await expect(employeeProjectsPage.rowEdit).toBeClickable();

    await expect(employeeProjectsPage.rowDelete).toBeDisplayed();
    await expect(employeeProjectsPage.rowDelete).toBeClickable();
  });

  it('Cliclk on Add New Project button', async () => {
    await employeeProjectsPage.clickTopButton();
  });

  it('Failed New Project creation attempt with empty fields', async () => {
    await expect(employeeAddNewProjectPage.labelNameInput).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelDescriptionInput).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelStartDateInput).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelEndDateInput).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelClientNameInput).toBeDisplayed();
    await expect(employeeAddNewProjectPage.dropdownsActive).toBeDisplayed();
    await expect(employeeAddNewProjectPage.dropdownsEmployeee).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelAdminInput).toBeDisplayed();

    await employeeAddNewProjectPage.clickButtonConfirm();

    await expect(employeeAddNewProjectPage.labelNameErrorMsg).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelDescriptionErrorMsg).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelStartDateErroMsg).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelEndDateErrorMsg).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelClientNameErrorMsg).toBeDisplayed();
    await expect(employeeAddNewProjectPage.dropdownsEmployeeSelect).toBeDisplayed();
    await expect(employeeAddNewProjectPage.dropdownsEmployeeeErrorMsg).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelAdminErrorMsg).toBeDisplayed();
  });

  it('Failed New Project creation attempt with wrongly filled fields', async () => {
    await employeeAddNewProjectPage.fillForm('123', '123', '10', '10', '123', '123');
    await employeeAddNewProjectPage.fillFormDorpdowns();

    await employeeAddNewProjectPage.clickButtonConfirm();

    await expect(employeeAddNewProjectPage.labelNameErrorMsg).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelDescriptionErrorMsg).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelStartDateErroMsg).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelEndDateErrorMsg).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelClientNameErrorMsg).toBeDisplayed();
    await expect(employeeAddNewProjectPage.labelAdminErrorMsg).toBeDisplayed();

    await employeeAddNewProjectPage.clickButtonCancel();
  });

  //   it('Succesful New Project creation attempt', async () => {
  //     await employeeAddNewProjectPage.fillForm('TestProject', 'ThisIsATest', '29062022', '5072022', 'TestClient', 'TestAdmin');
  //     await employeeAddNewProjectPage.fillFormDorpdowns();

  //     await employeeAddNewProjectPage.clickButtonConfirm();
  //   });

  // Not implemented

  //Flow does not goes back to the employee page neither at a succes nor a return.
  //Can not continue the test until that issue fixed.

  //   it('Cliclk on Projects edit', async () => {
  //     await employeeProjectsPage.rowEdit();
  //   });

  //   it('Failed to edit a project attempt with wrongly filled fields', async () => {
  //     await expect(employeeEditProjectPage.labelName).toBeDisplayed();
  //     await expect(employeeEditProjectPage.labelDescriptionInput).toBeDisplayed();
  //     await expect(employeeEditProjectPage.labelStartDateInput).toBeDisplayed();
  //     await expect(employeeEditProjectPage.labelEndDateInput).toBeDisplayed();
  //     await expect(employeeEditProjectPage.labelClientNameInput).toBeDisplayed();
  //     await expect(employeeEditProjectPage.dropdownsActive).toBeDisplayed();
  //     await expect(employeeEditProjectPage.dropdownsEmployeee).toBeDisplayed();
  //     await expect(employeeEditProjectPage.labelAdminInput).toBeDisplayed();

  //     await employeeEditProjectPage.fillForm('123', '123', '10', '10', '123', '123');

  //     await employeeEditProjectPage.clickButtonConfirm();

  //     await expect(employeeEditProjectPage.labelNameErrorMsg).toBeDisplayed();
  //     await expect(employeeEditProjectPage.labelDescriptionErrorMsg).toBeDisplayed();
  //     await expect(employeeEditProjectPage.labelStartDateErroMsg).toBeDisplayed();
  //     await expect(employeeEditProjectPage.labelEndDateErrorMsg).toBeDisplayed();
  //     await expect(employeeEditProjectPage.labelClientNameErrorMsg).toBeDisplayed();
  //     await expect(employeeEditProjectPage.labelAdminErrorMsg).toBeDisplayed();
  //   });

  //   it('Succes to edit a Project creation attempt', async () => {
  //     await employeeEditProjectPage.fillForm(
  //       'TestProject',
  //       'ThisIsATest',
  //       '29062022',
  //       '5072022',
  //       'TestClient',
  //       'TestAdmin'
  //     );
  //     await employeeEditProjectPage.fillFormDorpdowns();

  //     await employeeEditProjectPage.clickButtonConfirm();
  //   });

  //   it('Employee Project Delete modal components check', async () => {
  //     await expect(employeeProjectsPage.deleteModal).toBeDisplayed();

  //     await expect(employeeProjectsPage.deleteModalCross).toBeDisplayed();
  //     await expect(employeeProjectsPage.deleteModalCross).toBeClickable();

  //     await expect(employeeProjectsPage.deleteModalTitle).toBeDisplayed();
  //     await expect(employeeProjectsPage.deleteModalText1).toBeDisplayed();
  //     await expect(employeeProjectsPage.deleteModalText2).toBeDisplayed();

  //     await expect(employeeProjectsPage.deletenModalCancelButton).toBeDisplayed();
  //     await expect(employeeProjectsPage.deletenModalCancelButton).toBeClickable();

  //     await expect(employeeProjectsPage.deleteModalConfirmButton).toBeDisplayed();
  //     await expect(employeeProjectsPage.deleteModalConfirmButton).toBeClickable();

  //     await employeeProjectsPage.clickDeletenModalCancelButton();
  //   });

  //   it('Cliclk on Timesheet button on the sidebar', async () => {
  //     await employeeProjectsPage.sidebarItemTimesheet();
  //   });

  //   it('Employee Timesheets Page Header components check', async () => {
  //     await expect(employeeTimesheetsPage.headerButtonHome).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.headerButtonHome).toBeClickable();

  //     await expect(employeeTimesheetsPage.headerSearchBox).toBeDisplayed();
  //   });

  //   it('Employee Timesheets Page footer components check', async () => {
  //     await expect(employeeProjectsPage.sidebarImageUser).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.footerIconLinkFb).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.footerIconLinkFb).toBeClickable();

  //     await expect(employeeTimesheetsPage.footerIconLinkGh).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.footerIconLinkGh).toBeClickable();

  //     await expect(employeeTimesheetsPage.footerIconLinkIg).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.footerIconLinkIg).toBeClickable();

  //     await expect(employeeTimesheetsPage.footerIconLinkIn).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.footerIconLinkIn).toBeClickable();

  //     await expect(employeeTimesheetsPage.footerIconLinkTw).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.footerIconLinkTw).toBeClickable();

  //     await expect(employeeTimesheetsPage.footerTextPlace).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.footerTextRights).toBeDisplayed();
  //   });

  //   it('Employee Timesheets Page Sidebar components check', async () => {
  //     await expect(employeeTimesheetsPage.sidebarImageUser).toBeDisplayed();
  //     // await expect(employeeTimesheetsPage.sidebarImageUser).toBeClickable();

  //     await expect(employeeTimesheetsPage.sidebarUserName).toBeDisplayed();
  //     // await expect(employeeTimesheetsPage.sidebarUserName).toBeClickable();

  //     await expect(employeeTimesheetsPage.sidebarUserRole).toBeDisplayed();
  //     // await expect(employeeTimesheetsPage.sidebarUserRole).toBeClickable();

  //     await expect(employeeTimesheetsPage.sidebarTitleMenu).toBeDisplayed();

  //     await expect(employeeTimesheetsPage.sidebarItemProjects).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.sidebarItemProjects).toBeClickable();

  //     await expect(employeeTimesheetsPage.sidebarItemTimesheet).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.sidebarItemTimesheet).toBeClickable();

  //     await expect(employeeTimesheetsPage.sidebarItemPersonalnfo).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.sidebarItemPersonalnfo).toBeClickable();
  //   });

  //   it('Employee Timesheets Page components check', async () => {
  //     await expect(employeeTimesheetsPage.logo).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.title).toBeDisplayed();

  //     await expect(employeeTimesheetsPage.topButton).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.topButton).toBeClickable();

  //     await expect(employeeTimesheetsPage.row).toBeDisplayed();

  //     await expect(employeeTimesheetsPage.rowTitleEmployeeId).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.rowTitleProjectId).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.rowTitleStartDate).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.rowTitleEndDate).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.rowTitleTasks).toBeDisplayed();

  //     await expect(employeeTimesheetsPage.rowEmployeeId).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.rowProjectId).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.rowStartDate).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.rowEndDate).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.rowTasks).toBeDisplayed();

  //     await expect(employeeTimesheetsPage.rowEdit).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.rowEdit).toBeClickable();

  //     await expect(employeeTimesheetsPage.rowDelete).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.rowDelete).toBeClickable();
  //   });

  //   it('Cliclk on Add Timesheet button', async () => {
  //     await employeeTimesheetsPage.clickTopButton();
  //   });

  //   it('Failed New Timesheet creation attempt with empty fields', async () => {
  //     await expect(employeeAddNewTimesheetPage.dropdownsEmployee).toBeDisplayed();
  //     await expect(employeeAddNewTimesheetPage.dropdownsProject).toBeDisplayed();
  //     await expect(employeeAddNewTimesheetPage.dropdownsTask).toBeDisplayed();
  //     await expect(employeeAddNewTimesheetPage.labelStartDateInput).toBeDisplayed();
  //     await expect(employeeAddNewTimesheetPage.labelEndDateInput).toBeDisplayed();

  //     await employeeAddNewTimesheetPage.clickButtonConfirm();

  //     await expect(employeeAddNewTimesheetPage.dropdownsEmployeeeErrorMsg).toBeDisplayed();
  //     await expect(employeeAddNewTimesheetPage.dropdownsProjectErrorMsg).toBeDisplayed();
  //     await expect(employeeAddNewTimesheetPage.dropdownsTaskErrorMsg).toBeDisplayed();
  //     await expect(employeeAddNewTimesheetPage.labelStartDateErrorMsg).toBeDisplayed();
  //     await expect(employeeAddNewTimesheetPage.labelEndDateErrorMsg).toBeDisplayed();
  //   });

  //   it('Failed New Timesheet creation attempt with wrongly filled fields', async () => {
  //     await employeeAddNewProjectPage.fillForm('123', '123');

  //     await expect(employeeAddNewTimesheetPage.labelStartDateErrorMsg).toBeDisplayed();
  //     await expect(employeeAddNewTimesheetPage.labelEndDateErrorMsg).toBeDisplayed();
  //   });

  //   it('Succesful New Timesheet creation attempt', async () => {
  //     await employeeAddNewTimesheetPage.fillForm('29062022', '05072022');
  //     await employeeAddNewTimesheetPage.fillFormDorpdowns();

  //     await employeeAddNewTimesheetPage.clickButtonConfirm();
  //   });

  //   it('Cliclk on Timesheet edit', async () => {
  //     await employeeTimesheetsPage.rowEdit();
  //   });

  //   it('Failed to edit a Timesheet attempt with wrongly filled fields', async () => {
  //     await expect(employeeEditTimesheetPage.dropdownsEmployee).toBeDisplayed();
  //     await expect(employeeEditTimesheetPage.dropdownsProject).toBeDisplayed();
  //     await expect(employeeEditTimesheetPage.dropdownsTask).toBeDisplayed();
  //     await expect(employeeEditTimesheetPage.labelStartDateInput).toBeDisplayed();
  //     await expect(employeeEditTimesheetPage.labelEndDateInput).toBeDisplayed();

  //     await employeeEditTimesheetPage.fillForm('123', '123');

  //     await expect(employeeEditTimesheetPage.labelStartDateErrorMsg).toBeDisplayed();
  //     await expect(employeeEditTimesheetPage.labelEndDateErrorMsg).toBeDisplayed();
  //   });

  //   it('Succes to edit a Timesheet creation attempt', async () => {
  //     await employeeEditTimesheetPage.fillForm('29062023', '05072023');
  //     await employeeEditTimesheetPage.fillFormDorpdowns();

  //     await employeeEditTimesheetPage.clickButtonConfirm();
  //   });

  //   it('Browser goes back to Employee Timesheet page', async () => {
  //     browser.url('https://coco-trackgenix-app.vercel.app/employee/timesheet');
  //   });

  //   it('Employee Timesheet Delete modal components check', async () => {
  //     await expect(employeeTimesheetsPage.deleteModal).toBeDisplayed();

  //     await expect(employeeTimesheetsPage.deleteModalCross).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.deleteModalCross).toBeClickable();

  //     await expect(employeeTimesheetsPage.deleteModalTitle).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.deleteModalText1).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.deleteModalText2).toBeDisplayed();

  //     await expect(employeeTimesheetsPage.deletenModalCancelButton).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.deletenModalCancelButton).toBeClickable();

  //     await expect(employeeTimesheetsPage.deleteModalConfirmButton).toBeDisplayed();
  //     await expect(employeeTimesheetsPage.deleteModalConfirmButton).toBeClickable();

  //     await employeeTimesheetsPage.clickDeletenModalCancelButton();
  //   });

  //   it('Cliclk on Personal Information button on the sidebar', async () => {
  //     await employeePersonalInfoPage.sidebarItemPersonalnfo();
  //   });

  //   it('Employee Personal Information Page Header components check', async () => {
  //     await expect(employeePersonalInfoPage.headerButtonHome).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.headerButtonHome).toBeClickable();

  //     await expect(employeePersonalInfoPage.headerSearchBox).toBeDisplayed();
  //   });

  //   it('Employee Personal Information Page footer components check', async () => {
  //     await expect(employeePersonalInfoPage.sidebarImageUser).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.footerIconLinkFb).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.footerIconLinkFb).toBeClickable();

  //     await expect(employeePersonalInfoPage.footerIconLinkGh).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.footerIconLinkGh).toBeClickable();

  //     await expect(employeePersonalInfoPage.footerIconLinkIg).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.footerIconLinkIg).toBeClickable();

  //     await expect(employeePersonalInfoPage.footerIconLinkIn).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.footerIconLinkIn).toBeClickable();

  //     await expect(employeePersonalInfoPage.footerIconLinkTw).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.footerIconLinkTw).toBeClickable();

  //     await expect(employeePersonalInfoPage.footerTextPlace).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.footerTextRights).toBeDisplayed();
  //   });

  //   it('Employee Personal Information Page Sidebar components check', async () => {
  //     await expect(employeePersonalInfoPage.sidebarImageUser).toBeDisplayed();
  //     // await expect(employeePersonalInfoPage.sidebarImageUser).toBeClickable();

  //     await expect(employeePersonalInfoPage.sidebarUserName).toBeDisplayed();
  //     // await expect(employeePersonalInfoPage.sidebarUserName).toBeClickable();

  //     await expect(employeePersonalInfoPage.sidebarUserRole).toBeDisplayed();
  //     // await expect(employeePersonalInfoPage.sidebarUserRole).toBeClickable();

  //     await expect(employeePersonalInfoPage.sidebarTitleMenu).toBeDisplayed();

  //     await expect(employeePersonalInfoPage.sidebarItemProjects).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.sidebarItemProjects).toBeClickable();

  //     await expect(employeePersonalInfoPage.sidebarItemTimesheet).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.sidebarItemTimesheet).toBeClickable();

  //     await expect(employeePersonalInfoPage.sidebarItemPersonalnfo).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.sidebarItemPersonalnfo).toBeClickable();
  //   });

  //   it('Employee Personal Information Page components check', async () => {
  //     await expect(employeePersonalInfoPage.logo).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.title).toBeDisplayed();

  //     await expect(employeePersonalInfoPage.row).toBeDisplayed();

  //     await expect(employeePersonalInfoPage.rowTitleFirstName).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowTitleLastName).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowTitlePhone).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowTitleEmail).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowTitlePassword).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowTitleActive).toBeDisplayed();

  //     await expect(employeePersonalInfoPage.rowFirstName).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowLastName).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowPhone).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowEmail).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowPassword).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowActive).toBeDisplayed();

  //     await expect(employeePersonalInfoPage.rowEdit).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowEdit).toBeClickable();

  //     await expect(employeePersonalInfoPage.rowDelete).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.rowDelete).toBeClickable();
  //   });

  //   it('Cliclk on Personal Information edit', async () => {
  //     await employeePersonalInfoPage.rowEdit();
  //   });

  //   it('Failed to edit Personal Information attempt with wrongly filled fields', async () => {
  //     await expect(employeeEditPersonalInfoPage.labelNameInput).toBeDisplayed();
  //     await expect(employeeEditPersonalInfoPage.labelLastNameInput).toBeDisplayed();
  //     await expect(employeeEditPersonalInfoPage.labelPhoneInput).toBeDisplayed();
  //     await expect(employeeEditPersonalInfoPage.labelEmailInput).toBeDisplayed();
  //     await expect(employeeEditPersonalInfoPage.labelPasswordInput).toBeDisplayed();
  //     await expect(employeeEditPersonalInfoPage.dropdownsActive).toBeDisplayed();

  //     await employeeEditTimesheetPage.fillForm('123', '123', 'abc', '123', '123');

  //     await expect(employeeEditPersonalInfoPage.labelNameErrorMsg).toBeDisplayed();
  //     await expect(employeeEditPersonalInfoPage.labelLastNameErrorMsg).toBeDisplayed();
  //     await expect(employeeEditPersonalInfoPage.labelPhoneErrorMsg).toBeDisplayed();
  //     await expect(employeeEditPersonalInfoPage.labelEmailErrorMsg).toBeDisplayed();
  //     await expect(employeeEditPersonalInfoPage.labelPasswordErrorMsg).toBeDisplayed();
  //   });

  //   it('Succes to edit Personal Information creation attempt', async () => {
  //     await employeeEditTimesheetPage.fillForm(
  //       'TestEdit',
  //       'TestEmployee',
  //       '1234567895',
  //       'Test@test.com',
  //       '1234abcd'
  //     );
  //     await employeeEditTimesheetPage.fillFormDorpdowns();

  //     await employeeEditTimesheetPage.clickButtonConfirm();
  //   });

  //   it('Browser goes back to Employee Personal Information page', async () => {
  //     browser.url('https://coco-trackgenix-app.vercel.app/employee/profile');
  //   });

  //   it('Employee Personal Information Delete modal components check', async () => {
  //     await expect(employeePersonalInfoPage.deleteModal).toBeDisplayed();

  //     await expect(employeePersonalInfoPage.deleteModalCross).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.deleteModalCross).toBeClickable();

  //     await expect(employeePersonalInfoPage.deleteModalTitle).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.deleteModalText1).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.deleteModalText2).toBeDisplayed();

  //     await expect(employeePersonalInfoPage.deletenModalCancelButton).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.deletenModalCancelButton).toBeClickable();

  //     await expect(employeePersonalInfoPage.deleteModalConfirmButton).toBeDisplayed();
  //     await expect(employeePersonalInfoPage.deleteModalConfirmButton).toBeClickable();

  //     await employeePersonalInfoPage.clickDeletenModalCancelButton();
  //   });
});
