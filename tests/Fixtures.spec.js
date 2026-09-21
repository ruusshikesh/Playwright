const { test, expect, request } = require('@playwright/test');
const { customTest } = require('../tests/utils/Fixtures');

customTest("Fixtures Demo", async ({ authenticatedPage, createOrder, testDataForOrder }) => {

    //A reusable unit of code which can be used across multiple test cases is called fixtures in playwright. 
    //It is a way to share data and state between tests. 
    //It allows you to define setup and teardown logic that can be reused across multiple test cases.

    //Login to the application
    await authenticatedPage.goto("https://rahulshettyacademy.com/client");
    await authenticatedPage.locator("button[routerlink*='myorders']").click();
    await authenticatedPage.locator("tbody").waitFor();
    
    console.log(testDataForOrder.productName);
    console.log(testDataForOrder.country);
    console.log(testDataForOrder.productOrderedId);

    //Create order via API and verify the order is visible in Orders page
    await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();
    console.log("Your Order ID is : " + createOrder.orderId);

})