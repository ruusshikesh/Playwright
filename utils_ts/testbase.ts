import {test as baseTest} from '@playwright/test';

interface testDataForOrder {
            username: "rahulshetty@gmail.com";
            password: "Iamking@000";
            productName: "ADIDAS ORIGINAL";
            countryName: "Cuba";
        };

export const customTest = baseTest.extend<{ testDataForOrder: testDataForOrder }>(
    {
        testDataForOrder: {
            username: "rahulshetty@gmail.com",
            password: "Iamking@000",
            productName: "ADIDAS ORIGINAL",
            countryName: "Cuba"
        }
    }
)

