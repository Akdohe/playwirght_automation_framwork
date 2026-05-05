import {test, expect} from '@playwright/test';
import  {LoginPage} from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import {ENV} from '../utils/envConfig';


test.beforeEach(async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page).toHaveURL(/inventory.html/);
});
test('Add product to cart', async ({page}) => {
    const productPage = new ProductPage(page);

    await productPage.addItemToCart('sauce-labs-backpack');
    await expect(productPage.cartBadge).toHaveText('1');
    await productPage.openCart();
    await expect(page).toHaveURL(/cart.html/);
});


test('Complete checkout process', async ({page}) => {
    const productPage = new ProductPage(page);
    await productPage.addItemToCart('sauce-labs-backpack');
    await expect(productPage.cartBadge).toHaveText('1');
    await productPage.openCart();
    await expect(page).toHaveURL(/cart.html/);
    await productPage.clickCheckout();
    await expect(page).toHaveURL(/checkout-step-one.html/);
    await productPage.fillCheckoutInfo('John', 'Doe', '12345');
    await productPage.clickContinue();
    await expect(page).toHaveURL(/checkout-step-two.html/);
    await productPage.clickFinish();
    await expect(page).toHaveURL(/checkout-complete.html/);
    await expect(productPage.thankMsg).toContainText('Thank you');
    await productPage.clickBackToHome();
    await expect(page).toHaveURL(/inventory.html/);

});
