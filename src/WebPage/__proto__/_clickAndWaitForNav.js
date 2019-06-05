const clickAndWaitForNav = async function (opts={}) {
  const { selector } = opts;

  if (typeof selector === 'string' && selector.length) {
    return Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle0' }),
      this.page.click(selector)
    ]);
  }
  
  return Promise.reject('Selector is not a string.');
};

module.exports = clickAndWaitForNav;
