const fastCsv = require('fast-csv');
const fs = require('fs');
const {
  RESEARCH_RESULTS_SET_LIMIT,
  cssSelectors,
  mappings: { 
    securityResultsMapping
  }
} = require('../config');

const extractFundResults = async function () {
  const headers = getHeadersFromMap(new Map(securityResultsMapping));
  const csvStream = fastCsv.format({ headers: true, quoteHeaders: true });
  const outputPath = './dist/m1_securities.csv';
  const writeStream = fs.createWriteStream(outputPath, { flags: 'as' });
  
  console.log('DATA_EXTRACTION_START\n');
  await this.page.addScriptTag({ path: `./src/sites/${this.name}/scripts/Security.js` });
  csvStream.pipe(writeStream);
  csvStream.write(headers);
  await writeResultsToStreamForEachResultSet.call(this, csvStream);
  csvStream.end();
  console.log('DATA_EXTRACTION_END\n');

  return Promise.resolve();
};

const getHeadersFromMap = map => {
  return Array
   .from(map.values())
   .map(obj => obj.columnHeader);
 };

const writeResultsToStreamForEachResultSet = async function (csvStream) {
  const { researchResults } = cssSelectors;

  try {
    for (let setNum = 1; setNum <= RESEARCH_RESULTS_SET_LIMIT; setNum++) {
      console.log(`PROCESSING_RESULT_SET_${setNum}_OF_${RESEARCH_RESULTS_SET_LIMIT}\n`);
      const securities = await getSecuritiesFromRowElems.call(this);
      
      securities.forEach(security => {
        csvStream.write(security)
      });
  
      if (setNum < RESEARCH_RESULTS_SET_LIMIT) {
        await this.page.click(researchResults.NEXT_BUTTON_SELECTOR);
        await this.page.waitFor(2000);
      }     
    }
  
    return Promise.resolve(); 
  } catch (err) {
    return Promise.reject(`Error writing results to file.\n${err}`); 
  }
};

const getSecuritiesFromRowElems = async function () {
  const { researchResults } = cssSelectors;

  return this.page.evaluate((rowSelector, securityResultsMapping) => {
    const targetSecurities = [];
    const rows = Array.from(document.querySelectorAll(rowSelector));
    const map = new Map(securityResultsMapping);

    rows.forEach(row => {
      const security = new Security();

      map.forEach((securityPropObj, securityProp) => {
        const { selector } = securityPropObj;
        const elem = row.querySelector(selector);

        security[securityProp] = elem ? elem.innerText : null;
      });

      // if (parseFloat(security.perf3yr) > 5) {
        targetSecurities.push(Object.values(security));
      // }
    });

    return targetSecurities;
  }, researchResults.ROW_SELECTOR, securityResultsMapping);
};

module.exports = extractFundResults;
