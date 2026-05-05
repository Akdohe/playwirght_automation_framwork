import 'dotenv/config';
import { defineConfig } from '@playwright/test';
// import * as dotenv from 'dotenv';

// dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 15000,
  expect: {
    timeout: 5000,
  },

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    testIdAttribute: 'data-test'
  },
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

  reporter: [['html']],
});