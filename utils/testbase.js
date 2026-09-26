const base = require('@playwright/test');

exports.customtest = base.test.extend(

    {
        testDataForOrder: {
            username: "ruusshikesh123@gmail.com",
            password: "Rushikesh@12",
            productName: "ADIDAS ORIGINAL",
            countryName: "Cuba"
        }
    }
)

