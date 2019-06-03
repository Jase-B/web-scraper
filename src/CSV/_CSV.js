const fs = require('fs');
const fastCsv = require('fast-csv');
const protos = require('./__proto__');

function CSV (opts) {
  const {
    headers,
    quoteHeaders,
    outputPath,
  } = opts;

  this.targetStream = fastCsv.createWriteStream(headers, quoteHeaders);
  this.destStream = fs.createWriteStream(outputPath, { flags: 'as' });

  this.targetStream.pipe(this.destStream);
}

CSV.prototype = protos;


module.exports = CSV;