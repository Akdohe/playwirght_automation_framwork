class LoginPage {
    constructor(page){
        this.page = page;

        //All the locators of the login page
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('button.radius');
        this.successMsg = page.locator('#flash');
        this.errorMsg = page.locator('#flash');

    }

    //Actions navigationg to the login pagre 
    async goto(){
          await this.page.goto('/login');
    }
    //Actions to perform login
    async login (username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
}
module.exports = {LoginPage};
