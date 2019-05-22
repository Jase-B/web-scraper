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

WebPage.prototype.getElemsBySelector = function (selector) {
  validateSelector(selector);

  return this.page.evaluate(selector => {
    const elems = Array.from(document.querySelectorAll(selector));

    return elems.map(elem => elem.outerHTML);
  }, selector);
};

WebPage.prototype.getHandlesBySelector = async function (config={}) {
  const { handles, selector } = config;
  let targetHandles;

  if (handles && selector) {
    targetHandles = [];

    for (const handle of handles) {
      if (await handle.$(selector))
        targetHandles.push(handle);
    }
  }

  return Promise.resolve(targetHandles);
};

WebPage.prototype.getInnerTextFromElems = function (selector) {
  return this.page.evaluate(selector => {
    const elems = Array.from(document.querySelectorAll(selector));

    validateArray(elems);

    return elems.length
      ? elems.map(elem => elem.innerText)
      : null;
  }, selector);
};

WebPage.prototype.getSelectorValueFromHandle = async function (config={}) {
  const { handle, selector } = config;
  const selectorHandle = (handle && selector) && await handle.$(selector);
  let selectorValue;

  if (selectorHandle) {
    selectorValue = await this.page.evaluate(elem => elem.innerHTML, selectorHandle);
    await selectorHandle.dispose();
  }

  return Promise.resolve(selectorValue);
};

WebPage.prototype.open = async function () {
  const opts = {
    defaultViewport: {
      height: 800,
      width: 1280
    }
  };

  try {
    const browser = await require('puppeteer').launch(opts);
    const page = await browser.newPage();
  
    this.browser = browser;
    this.page = page;
  
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
