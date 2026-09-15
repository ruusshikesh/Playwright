const {test, expect} = require('@playwright/test');

test('Purchase Device After Login', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    const email = "anshika@gmail.com";
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
    await page.getByRole('button',{name:"Login"}).click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
    .getByRole("button",{name:"Add to Cart"}).click();
    
    await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
    
    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    
    await page.getByRole("button",{name :"Checkout"}).click();
    
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    
    await page.getByRole("button",{name :"India"}).nth(1).click();
    await page.getByText("PLACE ORDER").click();
    
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();

    const text = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    //console.log(text);
        
    const string = text.split(" ");
        //console.log(string);
    const OrderID = string[2];
    console.log(OrderID);
        
    await page.getByRole('button',{name:'ORDERS'}).click();
    
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