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