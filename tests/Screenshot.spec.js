const { test, expect } = require('@playwright/test');

test('Screenshot & Visual Comparison', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    const userEmail = page.locator("#userEmail");
    const password = page.locator("#userPassword");

    await userEmail.fill("anshika@gmail.com");
    await password.fill("Iamking@000");
    //Save Specifix element screenshot
    await page.locator("#login").screenshot({path:'tests/screenshots/screenshot.png'});
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    // Save the storage state to a file
    await context.storageState({path:'state.json'});
    let webcontext = await browser.newContext({storageState:'state.json'});
    //Save whole page screenshot
    await page.screenshot({path : 'tests/screenshots/screenshot1.png'});

})

test.only('Visual Comparison',async({page}) => {

    await page.goto("https://www.google.com/");
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('landing.png');

    

})