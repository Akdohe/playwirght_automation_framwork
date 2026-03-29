const{test, expect} = require('@playwright/test')
const {DropdownPage } = require('../pages/DropdownPage');

test.describe('Dropdown Tests', () => {
    test('Select option from dropdown', async({page}) => {
        
        const drodownPage = new DropdownPage(page);
        await drodownPage.goto();
        //select option1 
        await DropdownPage.selectOption('1');
        await expect(DropdownPage.dropdown).toHaveValue('1'); //assertion to check if the option is selected  
    });

    test('Select option 2from dropdown', async ({page}) => {
        const dropdownPage = new DropdownPage(page);
        await dropdownPage.goto();
        //selct optiopn2 
        await dropdownPage.selectOption('2');
        await expect(dropdownPage.dropdown).toHaveValue('2'); //assertion to check if the option is selected
    });

});