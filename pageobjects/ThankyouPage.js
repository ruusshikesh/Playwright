const { expect } = require('@playwright/test');

class ThankyouPage {

    constructor(page) {

        this.page = page;
        this.thanksmsg = page.locator("h1:has-text('THANKYOU FOR THE ORDER.')");
        this.thanksmsg1 = page.locator(":text('THANKYOU FOR THE ORDER.')");
        this.thanksmsg2 = page.locator(":text-is('THANKYOU FOR THE ORDER.')")
        this.thanksmsg3 = page.locator(".hero-primary");
    }
    async thankyouPageValidation() {

        await this.thanksmsg.isVisible();
        await this.thanksmsg1.isVisible();
        await this.thanksmsg2.isVisible();
        await expect(this.thanksmsg3).toHaveText(" Thankyou for the order. ");
    }
}
module.exports = { ThankyouPage };
