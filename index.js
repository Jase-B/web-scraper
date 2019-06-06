(async () => {
  const M1 = require('./src/sites/M1');
  const m1 = new M1();
  const { urls } = require('./src/sites/M1/config');
  const launchOpts = {
    defaultViewport: {
      height: 960,
      width: 1280
    },
    // devtools: true,
    // headless: false,
    // slowMo: 100
  };

  try {
    await m1.openPage(launchOpts);
    await m1.login();
    await m1.routeTo(urls.RESEARCH_FUNDS);
    await m1.sortFundResults();
    await m1.extractSecurityResults();
  } catch (err) {
    console.log(err);
  } finally {
    await m1.closePage();
  }
})();
