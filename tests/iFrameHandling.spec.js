const{test,expect}=require('@playwright/test');

test('iFrame Handling',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice");

    //SWITCH TO iFrame Below
    const iFrameSection = page.frameLocator("#courses-iframe");

    //When only one object is visible & other are missing in DOM the use below code style
    await iFrameSection.locator("li [href='lifetime-access']:visible").click();

    //Print the Number of Students enrolled
    //One Way
    const text = await iFrameSection.locator(".text h2").textContent();
    const string = text.split(" ")
    const CustomerNumber = string[1];
    console.log(CustomerNumber);
    //Another way
    console.log(string[1]);
    //Second Way
    console.log(text.split(" ")[1])

})