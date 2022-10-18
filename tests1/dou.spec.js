const { test, expect } = require('@playwright/test');
test('homepage has DOU in title and get started link linking to the intro page', async ({ page }) => {
    await page.goto('https://dou.ua//');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Спільнота програмістів/);
  
    // create a locator
    const Logo = page.locator('.logo >> a');
  
    // Expect an attribute "to be strictly equal" to the value.
    await expect(Logo).toHaveAttribute('href', 'https://dou.ua/');
  
    // Click on login, login form should appear
   await page.locator('#login-link').click()
   await expect(page.locator('#_loginDialog')).toBeVisible()
  });