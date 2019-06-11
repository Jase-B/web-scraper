const fs = require('fs');
const { google } = require('googleapis');
const fastCsv = require('fast-csv');
// const protos = require('./__proto__');

function CSV () {
  // const {
  //   headers,
  //   quoteHeaders,
  //   outputPath,
  // } = opts;

  // this.targetStream = fastCsv.createWriteStream(headers, quoteHeaders);
  // this.destStream = fs.createWriteStream(outputPath, { flags: 'as' });

  // this.targetStream.pipe(this.destStream);

  // const creds = fs.readFileSync('./google-credentials.json', 'utf8');
  // const {
  //   installed: {
  //     client_id, client_secret, redirect_uris
  //   }
  // } = JSON.parse(creds);
  // const oAuth = new google.auth.OAuth2(
  //   client_id, client_secret, redirect_uris[0]
  // );

  // oAuth.getToken()
  // console.log(oAuth)
}

// CSV.prototype = protos;

module.exports = CSV;
