/* eslint-disable no-undef */
const HomePage = require('../pageobjects/home_page');
const SignupPage = require('../pageobjects/signup_page');
// const NavigationPage = require('../pageobjects/navigation_page');
// const LoginPage = require('../pageobjects/login_page');
// const AdminPage = require('../pageobjects/admin_page');
// const ProjectsPage = require('../pageobjects/projects_page');
const General = require('../pageobjects/general.components.pages');
const EmployeePage = require('../pageobjects/employee.pages/employee_page');
const EmployeePersonal = require('../pageobjects/employee.pages/employee_personal.inf_page');

describe('E2E Employee', () => {
  beforeAll('Open browser', () => {
    browser.url('https://coco-trackgenix-app-git-feature-tg-143-basp-m2022.vercel.app/home');
  });
  it('Test all components', async () => {
    await expect(HomePage.img_01).toHaveAttrContaining('/static/media/main.637eb875.png');
    await expect(HomePage.img_02).toHaveAttrContaining('/static/media/simplicity.560e5eec.png');
    await expect(HomePage.img_03).toHaveAttrContaining('/static/media/efficiency-img.623fce77.png');
    await expect(HomePage.img_04).toHaveAttrContaining('/static/media/tracking-img.07e10fb8.png');
    await expect(HomePage.img_05).toHaveAttrContaining('/static/media/confidence-img.7e5dc573.png');
    await expect(HomePage.img_06).toHaveAttrContaining('/static/media/management-img.76790a3c.png');
    await expect(HomePage.img_07).toHaveAttrContaining('/static/media/about.e185b9f2.png');
    await expect(HomePage.img_08).toHaveAttrContaining('/static/media/about-two.f6216e88.png');
    await expect(General.btn_home).toBeClickable();
    await expect(General.facebook).toBeClickable();
    await expect(General.github).toBeClickable();
    await expect(General.instagram).toBeClickable();
    await expect(General.linkedin).toBeClickable();
    await expect(General.header).toBeExisting();
    await expect(General.link_task).toBeExisting();
    await expect(General.logo).toBeExisting();
    await expect(General.sidebar).toBeExisting();
    await expect(General.search).toBeClickable();
    await expect(General.paragraph_01).toHaveTextContaining('Rosario, Argentina.');
    await expect(General.paragraph_02).toHaveTextContaining(
      'Copyright 2022 Radium Rocket. All rights reserved.'
    );
    await expect(General.paragraph_03).toBeDisplayed();
    await expect(General.paragraph_04).toBeDisplayed();
    await expect(General.paragraph_05).toBeDisplayed();
    await expect(General.paragraph_06).toBeDisplayed();
    await expect(General.paragraph_07).toBeDisplayed();
  });
  it('Click on hamburguer menu', async () => {
    await HomePage.menu();
    await expect(HomePage.sidebarHome).toBeExisting();
    await expect(HomePage.sidebarHome).toBeDisplayed();
    await HomePage.X();
  });
  it('Click on btn sign up', async () => {
    await HomePage.btnSignUpClick();
  });
  it('Empty all inputs fields', async () => {
    await SignupPage.clickFields('', '', '', '', '');
    await SignupPage.placeholder_active.click();
    await SignupPage.placeholder_active_true.click();
    await SignupPage.create();
    await expect(SignupPage.error_msg_name).toHaveTextContaining(
      'First name is not allowed to be empty'
    );
    await expect(SignupPage.error_msg_lastName).toHaveTextContaining(
      'Last name is not allowed to be empty'
    );
    await expect(SignupPage.error_msg_phone).toHaveTextContaining(
      'Phone is not allowed to be empty'
    );
    await expect(SignupPage.error_msg_email).toHaveTextContaining(
      'Email is not allowed to be empty'
    );
    await expect(SignupPage.error_msg_password).toHaveTextContaining(
      'Password is not allowed to be empty'
    );
    await expect(SignupPage.error_msg_active).toHaveTextContaining(
      'Must indicate if the employee is active'
    );
    await SignupPage.create();
    await browser.refresh();
  });
  it('Wrong inputs', async () => {
    await SignupPage.clickFields('123', '123', 'abc', '1', 'abc1');
    await SignupPage.placeholder_active.click();
    await SignupPage.placeholder_active_true.click();
    await SignupPage.create();
    await expect(SignupPage.error_msg_name_02).toHaveTextContaining(
      'Must contain only letters and words can only be separated by a single white space'
    );
    await expect(SignupPage.error_msg_lastName_02).toHaveTextContaining(
      'Must contain only letters and words can only be separated by a single white space'
    );
    await expect(SignupPage.error_msg_phone_02).toHaveTextContaining('Must contain only numbers');
    await expect(SignupPage.error_msg_email_02).toHaveTextContaining(
      'Must contain an email format valid'
    );
    await expect(SignupPage.error_msg_password_02).toHaveTextContaining(
      'Must contain at least 8 characters'
    );
    await expect(SignupPage.error_msg_active_02).toHaveTextContaining(
      'Must indicate if the employee is active'
    );
    await SignupPage.create();
    await browser.refresh();
  });
  it('Complete fields inputs signup', async () => {
    await SignupPage.clickFields(
      'NewUser',
      'User',
      '3416123456',
      'qa@tester.com',
      'TestingTrack123'
    );
    await SignupPage.create();
    await SignupPage.clickConfirm();
    await SignupPage.clickSuccess();
  });
  // it('Back to home and login', async () => {
  //   await browser.url('https://coco-trackgenix-app.vercel.app/home');
  //   await HomePage.btnLogin();
  //   await LoginPage.login('qa@tester.com', 'TestingTrack123');
  //   await LoginPage.btnLogin();
  // });
  it('Go to employee page', async () => {
    await browser.url('https://coco-trackgenix-app.vercel.app/employee/');
  });
  it('Test all components employee page', async () => {
    await expect(EmployeePage.h2_employee).toHaveTextContaining('Employees');
    await expect(General.btn_home).toBeClickable();
    await expect(General.facebook).toBeClickable();
    await expect(General.github).toBeClickable();
    await expect(General.instagram).toBeClickable();
    await expect(General.linkedin).toBeClickable();
    await expect(General.header).toBeExisting();
    await expect(General.link_admins).toBeClickable();
    await expect(General.link_employee).toBeClickable();
    await expect(General.link_personalInf).toBeClickable();
    await expect(General.link_project).toBeClickable();
    await expect(General.link_task).toBeExisting();
    await expect(General.link_timesheet).toBeClickable();
    await expect(General.link_superAdmin).toBeClickable();
    await expect(General.logo).toBeExisting();
    await expect(EmployeePage.table).toBeExisting();
    await expect(General.sidebar).toBeExisting();
    await expect(EmployeePage.img_profile).toBeExisting();
    await expect(General.search).toBeClickable();
    await expect(General.paragraph_01).toHaveTextContaining('Rosario, Argentina.');
    await expect(General.paragraph_02).toHaveTextContaining(
      'Copyright 2022 Radium Rocket. All rights reserved.'
    );
  });
  it('Edit employee', async () => {
    await EmployeePage.edit();
    await SignupPage.clickFields(
      'NewName',
      'ThisUser',
      '3416123123',
      'tester@qa.com',
      'TestingTrack1122'
    );
    await EmployeePersonal.false();
    await EmployeePersonal.clickCreateEdit();
    await EmployeePersonal.clickConfirm();
    await EmployeePersonal.clickOk();
  });
  it('Delete user', async () => {
    await EmployeePage.delete();
    await EmployeePage.confirm_delete();
    await EmployeePage.ok();
  });
});
