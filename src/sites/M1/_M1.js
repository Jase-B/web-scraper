const WebPage = require('../../WebPage');
const { urls } = require('./config');
const protos = require('./__proto__');

function M1 () {
  WebPage.call(this, urls.INITIAL);
}

M1.prototype = Object.create(WebPage.prototype);
Object.keys(protos).forEach(prop => M1.prototype[prop] = protos[prop]);

module.exports = M1;
