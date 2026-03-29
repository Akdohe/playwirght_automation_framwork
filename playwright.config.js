// @ts-check
const  { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  
  testDir: './tests',
    /* Run tests in files in parallel */
  fullyParallel: true,
  //retries after failure  retries: 1,
  retries: 1,

  //how many workers in parallel threads
  workers: 2,

  //reporte - shows the result in terminal HTML report
   reporter: [['list'],['html',{open:'never'}]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    //use Base URl so you dont have to repeat the URL in every test
    baseURL : 'https://the-internet.herokuapp.com',
    
    //take screenShots only when test fails
    screenshot: 'only-on-failure',

    //record video only test fails
    video:  'retain-on-failure',

    //browser widow size
    viewport: { width: 1280, height: 720},

    //highlight action in browser
    headless: false,
  },
  
  //runs test on chromium only for now
  projects: [
    {
      name: 'chromium',
      use: {browserName: 'chromium'},
     },
     
  ],

});

