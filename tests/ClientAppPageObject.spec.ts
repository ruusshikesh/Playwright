import { test } from '@playwright/test';
import { LoginPage } from '../pageobjects_ts/LoginPage';
import { DashboardPage } from '../pageobjects_ts/DashboardPage';
import { CheckoutPage } from '../pageobjects_ts/CheckoutPage';
import { ThankyouPage } from '../pageobjects_ts/ThankyouPage';
import { OrderValidation } from '../pageobjects_ts/OrderValidation';
import { customTest } from '../utils_ts/testbase';

//JSON >>> String >>> Object
const dataSet = JSON.parse(JSON.stringify(require('../utils_ts/PlaceOrderTestData.json')));
//Created Fixture for base data and Pulling it via fixture

//Serial & Parallel Execution Configration
test.describe.configure({ mode: 'serial' });
//test.describe.configure({mode:'parallel'});

for (const data of dataSet) {

    test(`End to end Web automation for ${data.productName}`,async({browser})=>{
        const context = await browser.newContext();
        const page = await context.newPage();

        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        const checkoutPage = new CheckoutPage(page);
        const thankyouPage = new ThankyouPage(page);
        const orderValidation = new OrderValidation(page);

        // const username = "ruusshikesh123@gmail.com";
        // const password = "Rushikesh@12";
        // const productName = 'ADIDAS ORIGINAL';
        // const countryName = 'Cuba';

        await loginPage.goTo();
        await loginPage.validLogin(data.username, data.password);

        await dashboardPage.searchProductAddToCart(data.productName);
        await dashboardPage.navigateToCart();

        await checkoutPage.checkoutTheProduct(data.countryName, data.username);
        //ThankyouPage validations
        await thankyouPage.thankyouPageValidation();
        //Order Validations
        await orderValidation.orderFetchAndValidate();

    });
}
customTest('End to end Web automation with test data driven via Fixtures',async({browser,testDataForOrder})=> 
    
    {
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const checkoutPage = new CheckoutPage(page);
    const thankyouPage = new ThankyouPage(page);
    const orderValidation = new OrderValidation(page);

  
    // const username = "ruusshikesh123@gmail.com";
    // const password = "Rushikesh@12";
    // const productName = 'ADIDAS ORIGINAL';
    // const countryName = 'Cuba';

    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

    await dashboardPage.searchProductAddToCart(testDataForOrder.productName);
    await dashboardPage.navigateToCart();

    await checkoutPage.checkoutTheProduct(testDataForOrder.countryName, testDataForOrder.username);
    //ThankyouPage validations
    await thankyouPage.thankyouPageValidation();
    //Order Validations
    await orderValidation.orderFetchAndValidate();

});