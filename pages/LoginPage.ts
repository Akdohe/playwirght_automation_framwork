import {Page, expect} from "@playwright/test"

export class LoginPage {
    constructor(private page : Page){}
    //Locators
    get usernameInput(){
        return this.page.getByTestId('username');
    }

    get passwordInput(){
        return this.page.getByTestId('password');
    }
    get loginButton(){
        return this.page.getByRole('button',{ name: /login/i });
    }
    get menuButton(){
        // return this.page.locator('#react-burger-menu-btn');
        return this.page.getByRole('button', { name: /menu/i });
    }
    get logoutButton(){
        return this.page.getByTestId('logout-sidebar-link');
    }

    get errorMessage(){
        return this.page.locator('[data-test="error"]');
    }

    async navigateToLoginPage(){
        await this.page.goto('/');
        await expect(this.loginButton).toBeVisible();    
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutButton.click();
        await expect(this.loginButton).toBeVisible();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        console.log('Current URL:', await this.page.url());
        await this.loginButton.click();
    }

    async expectLoginSuccess(){
        await this.page.waitForURL('**/inventory.html');
        await expect(this.page.locator('.inventory_list')).toBeVisible();
    }

    async loginAndExpectSuccess(username: string, password: string) {
    await this.login(username, password);
    await this.expectLoginSuccess();
  }
    async expectLoginError(message?: string){
        await expect(this.errorMessage).toBeVisible();
        if (message) {
            await expect(this.errorMessage).toContainText(message);
        }
    }

}