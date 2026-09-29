import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/browser',

  use: {
    baseURL: 'http://127.0.0.1:3001',
  },

  webServer: {
    command: 'npx http-server . -p 3001',
    port: 3001,
    reuseExistingServer: false,
  },
});