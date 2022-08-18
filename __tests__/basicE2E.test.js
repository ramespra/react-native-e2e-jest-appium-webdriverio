const wdio = require('webdriverio');
import platformConfig from '../e2e-config';

describe('Appium with Jest automation testing', () => {
  let client;
  let field;

  beforeAll(async function () {
    const config = {
      path: '/wd/hub',
      port: 4723,
      capabilities: {
        ...platformConfig,
      },
    };

    client = await wdio.remote(config);
  });

  // alternative to explore later
  //   test('Test Accessibility Id', async () => {
  //     expect(await driver.hasElementByAccessibilityId('email')).toBe(true);
  //     expect(await driver.hasElementByAccessibilityId('password')).toBe(true);
  //   });

  afterAll(async function () {
    await client.deleteSession();
  });

  test('First test', async function () {
    // field = await client.hasElementByAccessibilityId('login-status');
    field = await client.$('#login-status');
    const value = await field.getText();
    expect(value).toBe('fail');
  });
});