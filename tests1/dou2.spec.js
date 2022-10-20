const { test, expect } = require('@playwright/test');
test('homepage has DOU in title and get started link linking to the intro page', async ({ page }) => {
    await page.goto('https://dou.ua//');

   // Footer should be visible
   await expect(page.locator('.b-footer')).toBeVisible()
  });