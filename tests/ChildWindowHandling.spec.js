const {test,expect } = require('@playwright/test');

test('Child Window Handling', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    //Second Window Handling Operation
    //Asynchronous function for two actions at a time
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click()
    ]);

    const text = await newPage.locator(".red").textContent();
    console.log(text);
    const string = text.split("@");
    const email = string[1].split(" ")[0];
    //console.log(email);
    //Enter this email in first page username
    await page.locator("#username").fill(email);
    console.log(await page.locator("#username").inputValue());

})
