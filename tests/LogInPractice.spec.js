const {test} = require('@playwright/test');

test('Log In Practice', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    const firstName = page.locator("#firstName");
    const lastName = page.locator("#lastName")
    const userEmail = page.locator("#userEmail");
    const userMobile = page.locator("#userMobile");
    const password = page.locator("#userPassword");
    const confirmPassword = page.locator("#confirmPassword");

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());

    await page.locator(".text-reset").click();
    await firstName.fill("RUSHIKESH");
    await lastName.fill("RAYKAR");
    await userEmail.fill("ruusshikesh.raykar7@gmail.com");
    await userMobile.fill("9119911904");
    await password.fill("Rushikesh@14");
    await confirmPassword.fill("Rushikesh@14");

    await page.locator("[type='checkbox']").check();
    await page.locator("#login").click();

    await page.waitForTimeout(2000);
    await page.locator(".btn.btn-primary").click();

    await userEmail.fill("ruusshikesh.raykar7@gmail.com");
    await password.fill("Rushikesh@12");
    await page.locator("#login").click();
    await page.waitForTimeout(4000);


});

test('Purchase Device After Login', async({browser})=>{

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