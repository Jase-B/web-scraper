const { cssSelectors } = require('../config');

const sortFundResults = async function () {
  const {
    researchResults: {
      PERF__5YR_HEADER_SELECTOR,
      PERF__PRICE_HISTORY_HEADER_SELECTOR
    }
  } = cssSelectors;

  console.log('SORT_RESULTS_START\n');
  await this.waitForSelectors([
    PERF__PRICE_HISTORY_HEADER_SELECTOR,
    PERF__5YR_HEADER_SELECTOR
  ]); 
  await this.page.click(PERF__5YR_HEADER_SELECTOR),
  await this.clickAndWaitForBodyClasses({ selector: PERF__PRICE_HISTORY_HEADER_SELECTOR });
  console.log('SORT_RESULTS_END\n');

  return Promise.resolve();
};

module.exports = sortFundResults;
