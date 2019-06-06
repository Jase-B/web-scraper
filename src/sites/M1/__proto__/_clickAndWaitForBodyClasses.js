const { cssSelectors } = require('../config');

const clickAndWaitForBodyClasses = async function (opts={}) {
  const { selector } = opts;

  if (typeof selector === 'string' && selector.length) {
    return await Promise.all([
      this.page.waitForSelector(cssSelectors.BODY_LOADING),
      this.page.click(selector),
    ])
    .then(async () => await this.page.waitForSelector(cssSelectors.BODY_LOADED));
  }
  
  return Promise.reject('Selector is not a string.');
};

module.exports = clickAndWaitForBodyClasses;
