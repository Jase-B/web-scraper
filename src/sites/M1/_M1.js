const WebPage = require('../../WebPage');
const { urls } = require('./config');
const protos = require('./__proto__');

function M1 () {
  WebPage.call(this, urls.INITIAL);
}

WebPage.addPrototypesToObjectType(M1, protos)

module.exports = M1;
