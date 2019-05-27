const { validateArray, validateSelector } = require('./WebPage.helpers');

module.exports = WebPage;

function WebPage (initialUrl) {
  this.initialUrl = initialUrl;
  this.browser = null;
  this.page = null;
}

WebPage.prototype.clickAndWaitForNav = function (opts={}) {
  const { selector } = opts;

  if (typeof selector === 'string' && selector.length) {
    return Promise.all([
      this.page.click(selector),
      this.page.waitForNavigation({ waitUntil: 'networkidle0' })
    ]);
  }
  
  return Promise.reject('Selector is not a string.');
};

WebPage.prototype.close = async function () {
  if (this.browser && this.browser.close instanceof Function) {
    await this.browser.close();
    console.log('\nBROWSER_CLOSED');

    return Promise.resolve();
  }

  return Promise.reject('Error closing browser.');
};

WebPage.prototype.open = async function () {
  const opts = {
    defaultViewport: {
      height: 800,
      width: 1280
    }
  };

  try {
    this.browser = await require('puppeteer').launch(opts);
    this.page = await this.browser.newPage();
  
    this.page.on('console', msg => {
      if (msg.type() === 'log')
        console.log(msg.text())
    })

    await this.page.goto(this.initialUrl);
  
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(`Error opening page.\n${err}`);
  }
};

WebPage.prototype.waitForSelectors = function (selectors) {
  if (Array.isArray(selectors) && selectors.length) {
    const promises = selectors.map(selector =>
      this.page.waitForSelector(selector)
    );
  
    return Promise.all(promises);
  }

  return Promise.reject('No available selectors.');
};
