const homePage = require('../pageobjects/home.page');
const loginPage = require('../pageobjects/logIn.page');
const signUpPage = require('../pageobjects/signUp.page');
const adminPage = require('../pageobjects/adminMain.page');
const navigationPage = require('../pageobjects/navigation.page');
const projectsPage = require('../pageobjects/projectsMain.page');
const superAdminPage = require('../pageobjects/superAdminMain.page');
const taskPage = require('../pageobjects/tasksMain.page');
const employeePage = require('../pageobjects/employeeMain.page');
const timesheetPage = require('../pageobjects/timesheetsMain.page');

describe('Flow for admin user', () => {
   
    it('Open browser', () => {
        browser.open('https://coco-trackgenix-app.vercel.app/home');
    });

});