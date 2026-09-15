const {test,expect} = require('@playwright/test');

test('Hidden Elements & Pop Up Handling',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    //To accept the POP Up click below
    page.on('dialog',dialog => dialog.accept());  
    //To reject the POP Up click below  
    //page.on('dialog',dialog => dialog.dismiss());    
    await page.locator("#confirmbtn").click();
    await page.pause();
    await page.locator("#mousehover").hover();

})