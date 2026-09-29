import { test, expect } from '@playwright/test';

test(' button is styled correctly', async ({ page }) => {
  await page.goto('/tests/fixtures/index.html');

  const button = page.locator('.mc.btn.rounded');
  await expect(button).toBeVisible();
  await expect(button).toHaveCSS(
    'border-radius',
    '15px'
  );

});

test('button states', async ({ page }) => {
  await page.goto('/tests/fixtures/index.html');

  const button = page.locator('.mc.btn');

  await expect(button).toBeVisible();

  await button.hover();

  await button.focus();

  await expect(button).toBeFocused();
});

test('Take ScreenShot', async ({ page }) => {

 await page.goto('/tests/fixtures/index.html');
 const button = page.locator('.mc.btn');
    await expect(page.locator('.mc.btn')).toHaveScreenshot();
});