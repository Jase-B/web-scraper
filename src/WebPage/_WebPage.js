const protos = require('./__proto__');

function WebPage (initialUrl) {
  this.browser = null;
  this.initialUrl = initialUrl;
  this.page = null;
}

WebPage.addPrototypesToObjectType = function (ObjectType, protos) {
  ObjectType.prototype = Object.create(WebPage.prototype);
  Object.keys(protos).forEach(prop => ObjectType.prototype[prop] = protos[prop]);
  ObjectType.prototype.constructor = ObjectType;
};

WebPage.addPrototypesToObjectType(WebPage, protos);

module.exports = WebPage;
