/* eslint-disable no-undef */
const HomePage = require('../pageobjects/home.page');
const SignupPage = require('../pageobjects/signup.page');

describe('E2E LOCKED USER', () => {
  beforeAll('BROWSER | TEST 00 | OPEN BROWSER', () => {
    browser.url('https://coco-trackgenix-app-git-feature-tg-143-basp-m2022.vercel.app/home');
  });
  it('Click btn sign up', async () => {
    await HomePage.();
    await browser.pause(300);
    await SignupPage.clickFieldName('Alan');
  });
});

//ME FALTAN LOS MODALSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
