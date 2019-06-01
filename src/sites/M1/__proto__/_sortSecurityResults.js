const { cssSelectors } = require('../config');

const sortSecurityResults = async function () {
  const {
      RESEARCH_RESULTS__TABLE_HEADER__DIV_YIELD,
      RESEARCH_RESULTS__TABLE_HEADER__PERF_3YR
  } = cssSelectors;

  console.log('SORT_RESULTS_START\n');
  await this.waitForSelectors([
    RESEARCH_RESULTS__TABLE_HEADER__PERF_3YR,
    RESEARCH_RESULTS__TABLE_HEADER__DIV_YIELD
  ]);
  await this.page.click(RESEARCH_RESULTS__TABLE_HEADER__PERF_3YR);
  await this.page.waitForSelector(`${RESEARCH_RESULTS__TABLE_HEADER__PERF_3YR}[class*=activePeriod]`);
  await this.clickAndWaitForNav({ selector: RESEARCH_RESULTS__TABLE_HEADER__DIV_YIELD });
  console.log('SORT_RESULTS_END\n');

  return Promise.resolve();
};

module.exports = sortSecurityResults;
