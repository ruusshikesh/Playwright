const { expect } = require('@playwright/test');

class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator("text=Checkout");
        this.country = page.locator("[placeholder*='Country']");
        this.dropdown = page.locator(".ta-results");
        this.cvv = page.locator("(//input[@type='text'])[2]");
        this.cardName = page.locator("(//input[@type='text'])[3]");
        this.usernameValidation = page.locator(".user__name [type='text']");
        this.submitButton = page.locator("a:has-text('PLACE ORDER')");

    }
    async checkoutTheProduct(countryName,username) {

        await this.checkoutButton.click();
        await this.country.pressSequentially("Cu", { delay: 100 });
        const dropdown = this.dropdown;
        await dropdown.waitFor();

        const optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; i++) {
            const text = await dropdown.locator("button").nth(i).textContent();
            if (text.trim() === countryName) {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }

        await this.cvv.fill("123");
        await this.cardName.fill("Boss is Rushikesh");
        await expect(this.usernameValidation.first()).toHaveText(username);
        await this.submitButton.click();

    }
}
module.exports = { CheckoutPage };
