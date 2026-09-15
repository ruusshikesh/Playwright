const {test, expect} = require('@playwright/test');

// BROWSER LAUNCH CODE
test('Browser Playwright test',async ({browser})=>{
    
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator("#username");
    const passWord = page.locator("input#password");
    const signIn = page.locator("#signInBtn");
    const deviceTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

    //with css & xpath

     await page.locator("#username").fill("rahulshettyacademy");
     await page.locator("input#password").fill("earning@830$3mK2");
     await page.locator("#terms").check();
     await page.locator("#signInBtn").click();
    //await page.waitForTimeout(2000);
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("");
    await userName.fill("rahulshettyacademy")
    await passWord.fill("");
    await passWord.fill("Learning@830$3mK2");
    await signIn.click();

    // console.log(await page.locator(".card-body a").first().textContent());
    // console.log(await page.locator(".card-body a").last().textContent());
    // console.log(await page.locator(".card-body a").nth(0).textContent());
    // console.log(await page.locator(".card-body a").nth(1).textContent());

    console.log('All Devices Below');
    const allTitles = await deviceTitles.allTextContents();

    console.log(allTitles);

});

test('Page Playwright test',async ({page})=>{

    await page.goto("https://google.com");
    console.log(await page.title());   
    await expect(page).toHaveTitle("Google");
});


