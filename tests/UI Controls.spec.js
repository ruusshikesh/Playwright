const {test, expect } = require('@playwright/test');

test('UI Controls', async ({ browser }) => {

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
    await expect(documentLink).toHaveAttribute("class", "blinkingText");
    await signIn.click();
    //await page.pause();
    //await page.waitForTimeout(3000);
})
