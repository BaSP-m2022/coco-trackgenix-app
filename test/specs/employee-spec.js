/* eslint-disable no-undef */
const HomePage = require('../pageobjects/home_page');
const SignupPage = require('../pageobjects/signup_page');
// const NavigationPage = require('../pageobjects/navigation_page');
// const LoginPage = require('../pageobjects/login_page');
// const AdminPage = require('../pageobjects/admin_page');
// const ProjectsPage = require('../pageobjects/projects_page');
const General = require('../pageobjects/general.components.pages');
const EmployeePage = require('../pageobjects/employee.pages/employee_page');
// const EmployeePersonal = require('../pageobjects/employee.pages/employee_personal.inf_page');
const employee_page = require('../pageobjects/employee.pages/employee_page');
const employee_personalInf_page = require('../pageobjects/employee.pages/employee_personal.inf_page');

describe('E2E Employee', () => {
  beforeAll('Open browser', () => {
    browser.url('https://coco-trackgenix-app-git-feature-tg-143-basp-m2022.vercel.app/home');
  });
  it('Click on btn sign up', async () => {
    await HomePage.btnSignUpClick();
  });
  it('Complete fields inputs signup', async () => {
    await SignupPage.clickFields(
      'NewUser',
      'User',
      '3416123456',
      'qa@tester.com',
      'TestingTrack123'
    );
  });
  it('Waiting browser', async () => {
    await SignupPage.create();
    await SignupPage.clickConfirm();
    await SignupPage.clickSuccess();
  });
  it('Click on btn sign up', async () => {
    await browser.url('https://coco-trackgenix-app.vercel.app/employee');
  });
  it('Test all components to be clickeable', async () => {
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
    await employee_page.edit();
    await SignupPage.clickFields(
      'NewName',
      'ThisUser',
      '3416123123',
      'tester@qa.com',
      'TestingTrack1122'
    );
    await employee_personalInf_page.false();
    await employee_personalInf_page.clickCreateEdit();
    await employee_personalInf_page.clickConfirm();
    await employee_personalInf_page.clickOk();
  });
  it('Delete user', async () => {
    await employee_page.delete();
    await employee_page.confirm_delete();
    await employee_page.ok();
  });
  // it('Click on edit', async () => {});
});
