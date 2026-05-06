import 'dotenv/config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  
  testDir: './tests',
  timeout: 15000,
  expect: {
    timeout: 5000,
  },
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  fullyParallel: true,

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    testIdAttribute: 'data-test',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',},
  projects: [{
    name: 'setup',
    testMatch: /.*\.setup\.ts/,
  },
  {
    name: 'tests',
    use:{
      storageState: 'auth.json', //resuse loginsession
    },
    dependencies: ['setup'], // run setup first
    },
  ],

  reporter: [['html'],
  ['junit', { outputFile: 'results.xml' }],
  ],
});