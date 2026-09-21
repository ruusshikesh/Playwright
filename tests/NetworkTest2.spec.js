const{test, expect} = require('@playwright/test');

test('Security Test request interception', async ({page}) => {
    //Login to the application
    const userEmail = page.locator("#userEmail");
    const password = page.locator("#userPassword");

    await page.goto("https://rahulshettyacademy.com/client/");
    await userEmail.fill("anshika@gmail.com");
    await password.fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState("networkidle");

    await page.locator(".card-body b").first().waitFor();
    await page.getByRole('button',{name:'ORDERS'}).click();
    
    //* Intercepting the Request by modifying other user order as mock data and checking the response from server 

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        async route => await route.continue({/*You can use headers as well to intercept*/ url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6aaff6e72be7a4bc2b5d8241'}) );
    
    await page.locator("button:has-text('View')").first().click();
    await page.pause();
})