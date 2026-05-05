import { expect, Page } from "@playwright/test";

export class ProductPage {
    constructor (private page : Page){}
    
    addToCartButton(productName: string){
        return this.page.getByTestId(`add-to-cart-${productName}`);
    }

    get cartBadge(){
        return this.page.getByTestId('shopping-cart-badge');
    }
    
    get cartIcon(){
        return this.page.getByTestId('shopping-cart-link');
    }
    get checkout(){
        return this.page.getByTestId('checkout');
   }
    get firstName(){
        return this.page.getByPlaceholder('First Name');
   }
    get lastName(){
        return this.page.getByPlaceholder('Last Name');
   }
    get postalCode(){
        return this.page.getByPlaceholder('Zip/Postal Code');
   }

   get continueBtn(){
        return this.page.getByTestId('continue');
   }
   
   get finishBtn(){
        return this.page.getByTestId('finish');
   }
    get thankMsg(){
        return this.page.getByTestId('complete-header');
   }
    get backToHomeBtn(){
        return this.page.getByTestId('back-to-products');
   }



    async addItemToCart(productName: string){
       const button = this.addToCartButton(productName);
       await expect(button).toBeVisible();
       await button.click();
    }

    async openCart(){
        await this.cartIcon.click();
    }
    async clickCheckout(){
        await this.checkout.click();
    }
    async fillCheckoutInfo(first: string, last: string, postal: string){
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(postal);
    }
    async clickContinue(){
        await this.continueBtn.click();
    }
    async clickFinish(){
        await this.finishBtn.click();
    }
    async finalMsg(){
        return await this.thankMsg.textContent();
    }
    async clickBackToHome(){
        await this.backToHomeBtn.click();
    }

}
