import test, { expect } from '@playwright/test';

test('playwright Special Locator',async({ browser })=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Student").click();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("Rushikesh@123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText(" The Form has been submitted successfully!.").isVisible();

    expect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible({timeout:20000});
    await page.getByRole("Link", {name: 'Shop'}).click();

    await expect(page.locator(".my-4").first()).toHaveText("Shop Name");
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
});

test('Playwright Test Level Timeouts', async({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const slowExpect = expect.configure({timeout:7000});

    test.setTimeout(40000);
    //waitFor() >>> will wait till 40 seconds as per test level timeout set as above

    //Below is test level timeout for action function which will override the global timeout from config file for action buttons.
    page.setDefaultTimeout(80000);

    //Navigation Timeout will be applicable for URL navigation like below 
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check;
    await page.getByLabel("Student").click();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("Rushikesh@123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText(" The Form has been submitted successfully!.").isVisible();

    //Five seconds default timeout for expect assertion can be overwritten like below at step level
    expect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible({timeout:20000});
    await page.getByRole("Link", {name: 'Shop'}).click();

    //Nine seconds configured timeout (slowExpect) for test case specific assertion can be taken like below at test case level
    await slowExpect(page.locator(".my-4").first()).toHaveText("Shop Name");
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

    //Timeout structure : Global level >>> Test level >>> Step level

});