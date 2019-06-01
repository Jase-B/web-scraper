(async () => {
  const M1 = require('./src/sites/M1');
  const { urls } = require('./src/sites/M1/config');
  const m1 = new M1();

  try {
    await m1.initPage();
    await m1.login();
    await m1.routeTo(urls.RESEARCH_FUNDS);
    await m1.sortSecurityResults();
    await m1.extractSecurityResults();
  } catch (err) {
    console.log(err);
  } finally {
    await m1.closePage();
  }
})();
