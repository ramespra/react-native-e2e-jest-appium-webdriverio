// utility file to extract the config for E2E testing at runtime
// for appium

import pkg from './package.json';

const {platform} = pkg.e2e;

if (!process.env.E2E_DEVICE) {
  throw new Error('E2E_DEVICE environment variable is not defined');
}

if (!platform[process.env.E2E_DEVICE]) {
  throw new Error(
    `No e2e device configuration found in package.json for E2E_DEVICE environment ${process.env.E2E_DEVICE}`,
  );
}

if (process.env.E2E_DEVICE === 'android') {
  platform[process.env.E2E_DEVICE].app = platform[
    process.env.E2E_DEVICE
  ].app.replace('$PROJECT_ROOT', process.env.PROJECT_ROOT);
}

export default platform[process.env.E2E_DEVICE];
