const routeTo = async function (path) {
  return Promise.all([
    this.page.waitForNavigation({ waitUntil: 'networkidle0' }),
    this.page.goto(path)
  ]);
};

module.exports = routeTo;
