const fastCsv = require('fast-csv');
const {
  RESEARCH_RESULTS_SET_LIMIT,
  cssSelectors,
  mappings
} = require('../config');

const extractSecurityResults = async function () {
  const map = new Map(mappings.securityResultsMapping);
  const headers = Array.from(map.values()).map(obj => obj.columnHeader);
  const csvStream = fastCsv.createWriteStream({ headers, quoteHeaders: true });
  const outputPath = './dist/m1_securities.csv';
  const writeStream = require('fs').createWriteStream(outputPath, {flags: 'as'});
  
  console.log('DATA_EXTRACTION_START\n');
  csvStream.pipe(writeStream);
  csvStream.write(headers)
  await writeResultsToStreamForEachResultSet.call(this, csvStream);
  csvStream.end();
  console.log('DATA_EXTRACTION_END\n');

  return Promise.resolve();
};

const writeResultsToStreamForEachResultSet = async function (csvStream) {
  const { RESEARCH_RESULTS__NEXT_BUTTON } = cssSelectors;

  try {
    for (let setNum = 1; setNum <= RESEARCH_RESULTS_SET_LIMIT; setNum++) {
      console.log(`PROCESSING_RESULT_SET_${setNum}_OF_${RESEARCH_RESULTS_SET_LIMIT}\n`);
      const securities = await getSecuritiesByPerf3Yr.call(this);
      securities.forEach(security => csvStream.write(security));
  
      if (setNum < RESEARCH_RESULTS_SET_LIMIT) {
        await this.page.click(RESEARCH_RESULTS__NEXT_BUTTON);
        await this.page.waitFor(2000);
      }     
    }
  
    return Promise.resolve(); 
  } catch (err) {
    return Promise.reject('Error writing results to file.'); 
  }
};

const getSecuritiesByPerf3Yr = async function () {
  const { RESEARCH_RESULTS__TABLE_ROW } = cssSelectors;
  const { securityResultsMapping } = mappings;
  
  return this.page.evaluate((rowSelector, securityResultsMapping) => {
    const targetSecurities = [];
    const getInnerTextOfElem = elem => elem ? elem.innerText : null;
    const rows = Array.from(document.querySelectorAll(rowSelector));
    const map = new Map(securityResultsMapping);

    for (const row of rows) {
      const security = {};

      map.forEach((securityPropObj, securityProp) => {
        const { selector } = securityPropObj;
        security[securityProp] = getInnerTextOfElem(row.querySelector(selector));
      });

      // if (parseFloat(security.perf3yr) > 5) {
        targetSecurities.push(Object.values(security));
      // }
    }

    return targetSecurities;
  }, RESEARCH_RESULTS__TABLE_ROW, securityResultsMapping);
};

module.exports = extractSecurityResults;
