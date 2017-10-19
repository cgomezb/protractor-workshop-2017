import { browser, Config } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/**/*.spec.js'],
  noGlobals: true,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(3000);
  },
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
