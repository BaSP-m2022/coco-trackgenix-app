/* eslint-disable no-undef */
const HomePage = require('../pageobjects/home_page');
const SignupPage = require('../pageobjects/signup_page');

describe('E2E Sign-Up', () => {
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
      'TestingTrack123',
      'qa@tester.com',
      true
    );
    await SignupPage.clickConfirm();
    await SignupPage.clickSuccess();
  });
  it('Waiting browser', async () => {
    await browser.url('https://coco-trackgenix-app.vercel.app/employee/profile');
  });
  it('Waiting browser', async () => {
    await browser.url('');
  });
});
