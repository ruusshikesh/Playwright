const {test, expect} = require('@playwright/test')

test('End to end Web automation',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const email = "anshika@gmail.com";
    const password = "Iamking@000";
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill(password);
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');

    await page.locator(".card-body b").first().waitFor();
    const allTitles = await page.locator(".card-body b").allTextContents();
    console.log(allTitles);

    // const productName = 'iPhone QA Max';
    // const products = await page.locator(".card-body");
    // const count = await products.count();

    //  for(let i = 0;i < count;i++)
    //  {
    //     if(await products.nth(i).locator("b").textContent === productName)
    //      {
    //          await products.nth(i).locator("i:has-text(' Add To Cart')").click();
    //         break;
    //     }
    //  }
    //Another Approach

     const DeviceName = 'iphone 13 pro';
     const catologue = page.locator(".card-body");
     const counts = catologue.count();

     for(let i = 0; i <= counts; i++)
     {
         if(catologue.nth(i).locator("b").textContent === DeviceName )
         {
             await catologue.nth(i).locator('text= Add To Cart').click();
             break;

         }
     }

    await page.locator("(//button[@class='btn w-10 rounded'][normalize-space()='Add To Cart'])[3]").click();
    await page.locator("[routerlink*=cart]").click();

    //await page.locator("div li").first().waitFor();
    // const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    // expect(bool).toBeTruthy();

    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("Ind",{delay:100});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();

    const optionsCount = await dropdown.locator("button").count();
    for(let i=0;i<optionsCount;i++)
     {
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text === " India")
        {
            dropdown.locator("button").nth(i).click();
            break
        }
    }

    await page.locator("(//input[@type='text'])[2]").fill("");
    await page.locator("(//input[@type='text'])[2]").fill("123");
     
    await page.locator("(//input[@type='text'])[3]").fill("Boss is Rushikesh");
    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator("a:has-text('PLACE ORDER')").click();
    //Assertions
    await page.locator("h1:has-text('THANKYOU FOR THE ORDER.')").isVisible();
    await page.locator(":text('THANKYOU FOR THE ORDER.')").isVisible();
    await page.locator(":text-is('THANKYOU FOR THE ORDER.')").isVisible();
    expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
     
    const text = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    //console.log(text);
    
    const string = text.split(" ");
    //console.log(string);
    const OrderID = string[2];
    console.log(OrderID);
    
    await page.locator('button:has-text("ORDERS")').click();
    await page.locator("tbody").waitFor();// VERY IMPORTANT STEPS AS It Function below is not included in auto wait
    const orderCount = page.locator("tbody tr");

    for(let i=0 ; i<await orderCount.count(); i++ )
    {
        const tempOrderFromStack = await orderCount.nth(i).locator("th").textContent();
        //console.log(tempOrderFromStack);
        if(tempOrderFromStack.includes(OrderID))
        {
            await orderCount.nth(i).locator("button").first().click();
            console.log(tempOrderFromStack);
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text").first().textContent();
    expect(OrderID.includes(orderIdDetails)).toBeTruthy();
    await page.pause();
})