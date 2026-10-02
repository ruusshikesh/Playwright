import { expect, Locator, Page } from '@playwright/test';

export class OrderValidation {

    page: Page;
    allText: Locator;
    orders: Locator;
    orderBody: Locator;
    itemList: Locator;
    orderIdGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.allText = page.locator(".em-spacer-1 .ng-star-inserted");
        this.orders = page.locator('button:has-text("ORDERS")');
        this.orderBody = page.locator("tbody");
        this.itemList = page.locator("tbody tr");
        this.orderIdGrid = page.locator(".col-text");

    }
    async orderFetchAndValidate() {

        const text: any = await this.allText.textContent();

        console.log(text);
        const string = text.split(' ');
        console.log(string);
        const OrderID = string[2];
        console.log(OrderID);

        await this.orders.click();
        await this.orderBody.waitFor();// VERY IMPORTANT STEPS AS It Function below is not included in auto wait
        const orderCount = this.itemList;

        for (let i = 0; i < await orderCount.count(); i++) {
            const tempOrderFromStack: any = await orderCount.nth(i).locator("th").textContent();
            //console.log(tempOrderFromStack);
            if (tempOrderFromStack.includes(OrderID)) {
                await orderCount.nth(i).locator("button").first().click();
                console.log(tempOrderFromStack);
                break;
            }
        }
        const orderIdDetails: any = await this.orderIdGrid.first().textContent();
        expect(OrderID.includes(orderIdDetails)).toBeTruthy();
    }
}
module.exports = { OrderValidation };
