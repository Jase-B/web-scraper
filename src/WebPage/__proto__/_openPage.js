const puppeteer = require('puppeteer');

const openPage = async function (opts) {
  console.log('OPENING_INITIAL_BROWSER_PAGE\n');

  try {
    this.browser = await puppeteer.launch(opts);
    this.name = this.constructor.name;
    this.page = await this.browser.newPage();
  
    this.page.on('console', logMsgText);
    await this.page.goto(this.initialUrl);
  
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(`Error opening page.\n${err}`);
  }
};

const logMsgText = msg => {
  if (msg.type() === 'log')
    console.log(msg.text())
};

module.exports = openPage;
