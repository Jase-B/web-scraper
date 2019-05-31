const WebPage = require('../WebPage');
const { urls } = require('./config');
const protos = require('./__proto__');

function M1 () {
  WebPage.call(this, urls.INITIAL);
}

M1.prototype = Object.create(WebPage.prototype);
M1.prototype.harvestFundsData = protos.harvestFundsData;
M1.prototype.login = protos.login;

module.exports = M1;
