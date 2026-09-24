const { test } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const { DashboardPage } = require('../pageobjects/DashboardPage');
const { CheckoutPage } = require('../pageobjects/CheckoutPage');
const { ThankyouPage } = require('../pageobjects/ThankyouPage');
const { OrderValidation } = require('../pageobjects/OrderValidation');

test('End to end Web automation', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const checkoutPage = new CheckoutPage(page);
    const thankyouPage = new ThankyouPage(page);
    const orderValidation = new OrderValidation(page);

    const username = "ruusshikesh123@gmail.com";
    const password = "Rushikesh@12";
    const productName = 'ADIDAS ORIGINAL';
    const countryName = 'Cuba';

    await loginPage.goTo();
    await loginPage.validLogin(username, password);

    await dashboardPage.searchProductAddToCart(productName);
    await dashboardPage.navigateToCart();

    await checkoutPage.checkoutTheProduct(countryName, username);
    //ThankyouPage validations
    await thankyouPage.thankyouPageValidation();
    //Order Validations
    await orderValidation.orderFetchAndValidate();

})