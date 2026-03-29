class DropdownPage {

    constructor(page){
        this.page = page;
        //locators
        this.dropdown  = page.locator('#dropdown');
  }

  //navigate to the dropdown page 
  async goto(){
    await this.page.goto('/dropdown');
  }

  //select an option by value
  async selectOption(value){
    await this.dropdown.selectOption(value);
  }

}
module.exports = {DropdownPage}