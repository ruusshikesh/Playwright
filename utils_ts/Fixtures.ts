import { APiUtils } from './APiUtils';
import { request,APIResponse,Page, test as baseTest } from '@playwright/test';

// Define TypeScript interfaces for your custom fixtures
interface CustomFixtures {
    authenticatedPage: Page;
    createOrder: APIResponse;
    testDataForOrder: {
        productName: string;
        country: string;
        productOrderedId: string;
    };
}

const loginPayLoad: any = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPayLoad: any = { orders: [{ country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };

export const customTest = baseTest.extend<CustomFixtures>({
    //UI Browser custom fixture
    authenticatedPage: async ({browser}, use) => {
        //Login to the application
        const context = await browser.newContext();
        const page = await context.newPage();

        const userEmail = page.locator("#userEmail");
        const password = page.locator("#userPassword");

        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await userEmail.fill("anshika@gmail.com");
        await password.fill("Iamking@000");
        await page.locator("[value='Login']").click();

        await page.waitForLoadState("networkidle");
        await use(page);
        //teardown code
        await context.close();
    },
    //API custom fixture
    createOrder: async ({ }, use) => {
        
        const apiContext = await request.newContext();
        const apiUtils = new APiUtils(apiContext, loginPayLoad);
        const response = await apiUtils.createOrder(orderPayLoad);
        await use(response);

        //teardown code
        await apiContext.dispose();
    },
    //testdata custom fixture
    testDataForOrder: async ({ }, use) => {
        await use({
            productName: 'ADIDAS ORIGINAL',
            country: 'cuba',
            productOrderedId: '6960eae1c941646b7a8b3ed3'
        })
    }
});
