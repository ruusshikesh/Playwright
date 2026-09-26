const { test } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const { DashboardPage } = require('../pageobjects/DashboardPage');
const { CheckoutPage } = require('../pageobjects/CheckoutPage');
const { ThankyouPage } = require('../pageobjects/ThankyouPage');
const { OrderValidation } = require('../pageobjects/OrderValidation');

//JSON >>> String >>> Object
const dataSet = JSON.parse(JSON.stringify(require('../utils/PlaceOrderTestData.json')));

//Created Fixture for base data and Pulling it via fixture
const {customtest} = require('../utils/testbase');

for(const data of dataSet)
    {
test(`End to end Web automation for ${data.productName}`, async ({ browser }) => 
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
customtest.only('End to end Web automation with test data driven via Fixtures', async ({ browser,testDataForOrder }) => 
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