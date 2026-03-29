const {test ,expect} = require ('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');

test.describe('Login Page Tests', () => {
test('Login page Assertions', async({page})=>{

    const loginPage = new LoginPage(page);
    
    //Navigate to the login page
    await loginPage.goto();
    //Verify the URL of the page
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
    await expect(page).toHaveTitle('The Internet');

    //Login to the application
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    //assert success message is visible
    await expect(loginPage.successMsg).toBeVisible();

});

test("Failed login - wrong password", async({page}) => {
   const loginPage = new LoginPage(page);  
   await loginPage.goto();
   await loginPage.login('tomsmith', 'wrongpassword');
   await expect(loginPage.errorMsg).toBeVisible(); //assertion to check if the error message is visible
   await expect(loginPage.errorMsg).toContainText('Your password is invalid!'); //assertion to check if the error message is displayed  
    
});

test("Failed Login - wrong usesrname", async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('wrongusername', 'SuperSecretPassword!');
    await expect(loginPage.errorMsg).toBeVisible(); //assertion to check if the error message is visible
    await expect(loginPage.errorMsg).toContainText('Your username is invalid!'); //assertion to check if the error message is displayed
});

});
