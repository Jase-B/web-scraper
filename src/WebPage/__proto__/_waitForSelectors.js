const waitForSelectors = async function (selectors) {
  if (Array.isArray(selectors) && selectors.length) {
    const promises = selectors.map(selector =>
      this.page.waitForSelector(selector)
    );
  
    return Promise.all(promises);
  }

  return Promise.reject('No available selectors.');
};

module.exports = waitForSelectors;
