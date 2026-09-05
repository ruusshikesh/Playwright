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

test.only('UI Controls', async({browser})=>{
    
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator("#username");
    const passWord = page.locator("input#password");
    const signIn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='documents-request']");



    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());    
    await userName.fill("rahulshettyacademy");
    await passWord.fill("Learning@830$3mK2");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    //Assertions
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").check();
    //Whenever you perform action then at the beggining only you need to put "await"
    //As you can see below action is performed at the end of line or we can outside of the bracket of "expect"
    //Inside expect we have only locator and the action is performed at the outside of the bracket of "expect" hence we need to place the await at the begging of expect
    await expect(page.locator("#terms")).toBeChecked();
    
    await page.locator("#terms").uncheck();
    //But Below you can see the "isChecked" action is performed inside the "expect" assertion hence await should be inside & if you keep await outside of "expect" bracket, it won't able to find the object due to absense of await & it will fail as there in no action is being performed outside of "expect" bracket .
    expect(await page.locator("#terms").isChecked()).toBeFalsy(); //toBeFalsy returns Boolean value & toBeFalsy() is instant: It is a basic tool that only looks at a fixed snapshot. It does not know how to wait, even if you put await at the front
    await expect(page.locator("#terms")).not.toBeChecked();

    await expect(documentLink).toHaveAttribute("class","blinkingText");

    await signIn.click();
    
    
    //await page.pause();
    //await page.waitForTimeout(3000);

    




}
)