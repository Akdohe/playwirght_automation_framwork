// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ENV } from '../utils/envConfig';

test.use({ storageState: undefined });
test.describe('Login Tests', () => {
  test('sauce demo login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login(ENV.USERNAME, ENV.PASSWORD);
  await loginPage.expectLoginSuccess();

});

test('Log-out scenario', async({page}) => { 
  const loginPage = new LoginPage(page);
  await page.goto('/inventory.html');
  await loginPage.logout();
});


test('invalid LoginScenario wrong UserName and Pass', async({page}) => { 
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login('wrong_username','wrong_pass');
  await loginPage.expectLoginError();

});

test('invalid LoginScenario empty credentials', async({page}) => { 
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login('','');
  await loginPage.expectLoginError();
});

test('locked_OutUser_scenario', async({page}) => { 
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login('locked_out_user','secret_sauce');
  await loginPage.expectLoginError('Epic sadface: Sorry, this user has been locked out.');

});

});