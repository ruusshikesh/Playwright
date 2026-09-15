const {test } = require('@playwright/test');

test('Purchase Device After Login', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const userEmail = page.locator("#userEmail");
    const password = page.locator("#userPassword");

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await userEmail.fill("ruusshikesh.raykar11@gmail.com");
    await password.fill("Rushikesh#12");
    await page.locator("[value='Login']").click();

    await page.waitForLoadState("networkidle");
    //await page.locator(".card-body b").waitFor(); It will only wait for first if index is not provided like first or last
    await page.locator(".card-body b").last().waitFor();
    const allDevices = await page.locator(".card-body b").allTextContents();

    console.log(allDevices);

})
