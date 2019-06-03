const protos = require('./__proto__');

function WebPage (initialUrl) {
  this.browser = null;
  this.initialUrl = initialUrl;
  this.page = null;
}

WebPage.prototype = protos;

module.exports = WebPage;
