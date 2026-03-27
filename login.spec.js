const { test, expect } = require('@playwright/test');

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'testuser@email.com');
  await page.fill('#password', 'securePassword123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);
});

test('Login with invalid credentials shows error', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'wrong@email.com');
  await page.fill('#password', 'wrongpassword');
  await page.click('button[type="submit"]');
  await expect(page.locator('.error-message')).toBeVisible();
});
