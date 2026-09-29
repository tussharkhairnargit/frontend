# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: button.spec.ts >>  button is styled correctly
- Location: tests\browser\button.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.mc.btn.rounded')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.mc.btn.rounded') with timeout 5000ms
  - waiting for locator('.mc.btn.rounded')

```

```yaml
- heading "File not found" [level=1]
- paragraph: The file "e:\Code\CSS\monocrome-scss\tests\fixtures\index.html" cannot be found. It may have been moved, edited, or deleted.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test(' button is styled correctly', async ({ page }) => {
  4  |   await page.goto('/tests/fixtures/index.html');
  5  | 
  6  |   const button = page.locator('.mc.btn.rounded');
> 7  |   await expect(button).toBeVisible();
     |                        ^ Error: expect(locator).toBeVisible() failed
  8  |   await expect(button).toHaveCSS(
  9  |     'border-radius',
  10 |     '15px'
  11 |   );
  12 | });
```