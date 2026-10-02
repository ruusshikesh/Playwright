import{Locator,Page} from '@playwright/test';

export class DashboardPage {
    
    page:Page;
    products:Locator;
    productText:Locator;
    cart:Locator;

    constructor(page:Page)
    {   
        this.page = page;
        this.products = page.locator(".card-body");
        this.productText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*=cart]");
    }

    async searchProductAddToCart(productName:string)
    {
        await this.productText.first().waitFor();
        const allTitles = await this.productText.allTextContents();
        console.log(allTitles);
       
        const catologue = await this.products;
        const counts = await catologue.count();

        for (let i = 0; i < counts; i++) {
            if (await catologue.nth(i).locator("b").textContent() === productName) {
                await catologue.nth(i).locator('text= Add To Cart').click();
                break;

            }
        }
    }

    async navigateToCart(){
    await this.cart.click();
    }

}
module.exports = {DashboardPage};
