const { test, expect, request } = require('@playwright/test');
const { APiUtils } = require('./utils/APiUtils');
const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };
const fakePayLoadOrders = { data: [], message: "No Orders" };

let response;
test.beforeAll('Placing Order via API Calls',async () => {
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext, loginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad);

})

//create order is success

test('Altering the API Response', async ({ page }) => {
    await page.addInitScript(value => {

        window.localStorage.setItem('token', value);
    }, response.token);
    await page.goto("https://rahulshettyacademy.com/client");
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*',
        async route => {
            /* Intercepting the response and mocking it
            /* API Response >>> Playwright response >>> send it to browser >>> Front End loads
    
            /* First Approach to alter the API call response */

            const response = await page.request.fetch(route.request());

            await route.fulfill({
                response,
                body: JSON.stringify(fakePayLoadOrders)
            })

            /* Rahul Sir Approach to alter the API call response 
        
            const response = await page.request.fetch(route.request());
            let body = fakePayLoadOrders;
            await route.fulfill({
                response,
                body: JSON.stringify(body),
            }) */


        })

    await page.locator("button[routerlink*='myorders']").click();
    //await page.pause();
    await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*');

    console.log(await page.locator(".mt-4").textContent());

})
