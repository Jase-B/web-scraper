(async () => {
  const M1 = require('./src/M1');
  const m1 = new M1();

  try {
    await m1.open();
    await m1.logIn();
    await m1.harvestFundsData();
  } catch (err) {
    console.log(err);
  } finally {
    await m1.close();
  }
})();
