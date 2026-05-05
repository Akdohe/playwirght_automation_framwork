import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ENV } from '../utils/envConfig';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

  await loginPage.expectLoginSuccess();

  await page.context().storageState({ path: 'auth.json' });

  console.log('After login URL:', await page.url());
});