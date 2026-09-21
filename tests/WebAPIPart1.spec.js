const{test, expect, request}= require('@playwright/test');

const loginPayload = {userEmail: "anshika@gmail.com",userPassword: "Iamking@000"}
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "6a296fa417ee3e78bacf1e59"}]}

let token;
let orderID;

test.beforeAll(async() => {

    const apiContext = await request.newContext();

    const loginResponse = 
    await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
        data:loginPayload

    });

    expect(loginResponse.ok()).toBeTruthy();
    
    const loginResponseJSON = await loginResponse.json();

    token = loginResponseJSON.token;
    console.log(token);
    
    //Order Placement
    
    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
            data: orderPayload,
            headers: {
                         'Authorization': token,
                        'Content-Type' : 'application/json'
                     }
        })
    expect(orderResponse.ok()).toBeTruthy;
    
    const orderResponseJSON = await orderResponse.json();
    orderID = orderResponseJSON.orders[0];
    console.log(orderID);


})

// test.beforeEach(async()=>{

// })

//End To End order placement and order validation in UI using API
test('Main Login',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    await page.goto("https://rahulshettyacademy.com/client");
    
    await page.locator('button:has-text("ORDERS")').click();
    await page.locator("tbody").waitFor();// VERY IMPORTANT STEPS AS It Function below is not included in auto wait
    const orderCount = page.locator("tbody tr");

    for(let i=0 ; i<await orderCount.count(); i++ )
    {
        const tempOrderFromStack = await orderCount.nth(i).locator("th").textContent();
        //console.log(tempOrderFromStack);
        if(tempOrderFromStack.includes(orderID))
        {
            await orderCount.nth(i).locator("button").first().click();
            console.log(tempOrderFromStack);
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text").first().textContent();
    expect(orderID.includes(orderIdDetails)).toBeTruthy();
    await page.pause();

})