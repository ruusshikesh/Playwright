const { test, expect } = require('@playwright/test');


test('Abort API Request', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    //All requests with jpg, png, jpeg, css will be aborted
    await page.route('**/*.{jpg,png,jpeg,css}', route => route.abort());
    //Print all the requests and responses with status code in console
    await page.on('request', request => console.log(request.url()));
    await page.on('response',response => console.log(response.url(),response.status()));
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("input#password").fill("Learning@830$3mK2");
    await page.locator("#terms").check();
    await page.locator("#signInBtn").click();
    await page.pause();

    //



})