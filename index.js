(async () => {
  const M1 = require('./src/M1');
  const m1 = new M1();

  try {
    await m1.initPage();
    await m1.login();
    await m1.harvestFundsData();
  } catch (err) {
    console.log(err);
  } finally {
    await m1.closePage();
  }
})();
