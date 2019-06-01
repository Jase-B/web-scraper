const routeTo = async function (path) {
  console.log('ROUTING\n');

  return Promise.all([
    this.page.waitForNavigation({ waitUntil: 'networkidle0' }),
    this.page.goto(path)
  ])
  .then(() => console.log(`ROUTED_TO: ${path}\n`));
};

module.exports = routeTo;
