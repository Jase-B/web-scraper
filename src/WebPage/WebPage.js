function WebPage (initialUrl) {
  this.browser = null;
  this.initialUrl = initialUrl;
  this.page = null;
}

WebPage.prototype = require('./__proto__');

module.exports = WebPage;
