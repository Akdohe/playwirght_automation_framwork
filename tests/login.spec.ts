// @ts-check
import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { BASE_URL, USERNAME, PASSWORD } from '../utils/envConfig';

test('sauce demo login with valid credentials', async ({ page }) => {
    const LoginPage = new loginPage(page);
  await page.goto(BASE_URL);
  await LoginPage.login(USERNAME, PASSWORD);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveTitle(/Swag Labs/);
});

