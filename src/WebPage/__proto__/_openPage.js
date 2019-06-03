const openPage = async function (opts) {
  console.log('OPENING_INITIAL_BROWSER_PAGE\n');

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

module.exports = openPage;
