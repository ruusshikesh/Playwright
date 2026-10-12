import { test, expect } from '@playwright/test';

test.describe('Login and form behavior', () => {
  test('Reject invalid credentials and allow correction', async ({ page }) => {
    test.setTimeout(30_000);

    // 1. Open a fresh login page and verify the login form is available.
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/', {
      waitUntil: 'domcontentloaded',
    });
    await expect(page.getByRole('textbox', { name: 'Username:' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password:' })).toBeVisible();

    // 2. Enter invalid credentials and submit them.
    await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
    await page.getByRole('textbox', { name: 'Password:' }).fill('wrong-password');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Verify the user remains on the login screen and sees the credential error.
    await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');
    const credentialError = page.locator('.alert-danger');
    await expect(credentialError).toContainText('Incorrect');
    await expect(credentialError).toContainText('username/password.');
    await expect(credentialError).toBeVisible({ timeout: 10_000 });
    await expect(page.getByRole('textbox', { name: 'Username:' })).toHaveValue('rahulshettyacademy');
    await expect(page.getByRole('textbox', { name: 'Password:' })).toHaveValue('wrong-password');

    // 3. Replace the incorrect password and submit again.
    await page.getByRole('textbox', { name: 'Password:' }).fill('Learning@830$3mK2');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Verify successful navigation to the ProtoCommerce shop page.
    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop', {
      timeout: 15_000,
    });
    await expect(page).toHaveTitle('ProtoCommerce');
    await expect(page.getByRole('heading', { name: 'Shop Name' })).toBeVisible();
  });
});
