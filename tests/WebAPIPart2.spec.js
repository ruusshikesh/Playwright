//Login UI
const { test } = require('@playwright/test');

let webcontext;
    test.beforeAll('Login Token Storage', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    const userEmail = page.locator("#userEmail");
    const password = page.locator("#userPassword");

    await userEmail.fill("anshika@gmail.com");
    await password.fill("Iamking@000");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path:'state.json'});
    webcontext = await browser.newContext({storageState:'state.json'});

});


test('Login with storage session webcontext', async () => {

        const page = await webcontext.newPage();
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        console.log(await page.title());
        await page.pause();
});

test('Client Login Practice', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    const firstName = page.locator("#firstName");
    const lastName = page.locator("#lastName")
    const userEmail = page.locator("#userEmail");
    const userMobile = page.locator("#userMobile");
    const password = page.locator("#userPassword");
    const confirmPassword = page.locator("#confirmPassword");

    // Direct Login Code

    // await userEmail.fill("anshika@gmail.com");
    // await password.fill("Iamking@000");
    // await page.locator("#login").click();

    //Registration & then login code
    await page.waitForLoadState('networkidle');
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

    await userEmail.fill("anshika@gmail.com");
    await password.fill("Iamking@000");
    await page.locator("#login").click();
    await page.waitForTimeout(4000);


});