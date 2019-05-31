const clickAndWaitForNav = async function (opts={}) {
  const { selector } = opts;

  if (typeof selector === 'string' && selector.length) {
    return Promise.all([
      this.page.click(selector),
      this.page.waitForNavigation({ waitUntil: 'networkidle0' })
    ]);
  }
  
  return Promise.reject('Selector is not a string.');
};

module.exports = clickAndWaitForNav;
