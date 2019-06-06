const closePage = async function () {
  if (this.browser && this.browser.close instanceof Function) {
    await this.page.waitFor(5000);
    await this.browser.close();
    console.log('BROWSER_CLOSED\n');

    return Promise.resolve();
  }

  return Promise.reject('Error closing browser.');
};

module.exports = closePage;
