// const {devices} = require('@playwright/test');

// const config = {
//   testDir: './tests',
//   retries:1,
//   timeout: 300 * 1000,
//   expect: { timeout: 3000 },
//   reporter: 'html',
//   projects: [
//     { name: 'chrome',
//       use: {
//         browserName: 'chromium',
//         //To accept SSL Failed certicate website and continue, enable below flag
//         ignoreHTTPSErrors:true,
//         //To accept geo location permission use below flag
//         permissions:['geolocation'],
//         headless: false,
//         actionTimeout: 10 * 1000,
//         navigationTimeout: 30 * 1000,
//         trace: 'on',
//         screenshot: 'only-on-failure',
//         video:'retain-on-failure',
//         //Device dimensions inbuild with Playwright
//         //...devices['iPhone 17 Pro Max'],
//       }},  
//     { name: 'safari',
//       use: {
//         browserName: 'webkit',
//         headless: false,
//         actionTimeout: 10 * 1000,
//         navigationTimeout: 30 * 1000,
//         trace: 'on',
//         screenshot: 'on',
//         //viewport:{width:720,height:720},
//         //...devices['Pixel 8 landscape'],
//       }}
//   ],

//   use: {
//   browserName: 'chromium',
//   headless: true,
//   actionTimeout: 10 * 1000,
//   navigationTimeout: 30 * 1000,
//   trace: 'on',
//   screenshot: 'only-on-failure',

// },
//   /* Configure projects for major browsers */
//   // projects: [
//   //   {
//   //     name: 'chromium',
//   //     use: { ...devices['Desktop Chrome'] },
//   //   },

//   // {
//   //   name: 'firefox',
//   //   use: { ...devices['Desktop Firefox'] },
//   // },

//   // {
//   //   name: 'webkit',
//   //   use: { ...devices['Desktop Safari'] },
//   // },

//   /* Test against mobile viewports. */
//   // {
//   //   name: 'Mobile Chrome',
//   //   use: { ...devices['Pixel 5'] },
//   // },
//   // {
//   //   name: 'Mobile Safari',
//   //   use: { ...devices['iPhone 12'] },
//   // },

//   /* Test against branded browsers. */
//   // {
//   //   name: 'Microsoft Edge',
//   //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//   // },
//   // {
//   //   name: 'Google Chrome',
//   //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//   // },
//   // ]

// }