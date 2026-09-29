import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('button has no accessibility violations', async ({ page }) => {
  await page.goto('/tests/fixtures/index.html');

  const results = await new AxeBuilder({
    page,
  }).analyze();

  expect(results.violations).toEqual([]);
});