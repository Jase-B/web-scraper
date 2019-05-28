const { selectors } = require('./M1.selectors');

exports.mappings = ((selectors) => {
  const {
    security: {
      SECURITY_DIV_YIELD_SELECTOR,
      SECURITY_EXPENSE_RATIO_SELECTOR,
      SECURITY_NAME_SELECTOR,
      SECURITY_PERF_3YR_SELECTOR,
      SECURITY_PERF_3YR_POS_SELECTOR,
      SECURITY_SYMBOL_SELECTOR
    }
  } = selectors;

  return {
    securityPropToSelector: [
      ['divYield', SECURITY_DIV_YIELD_SELECTOR],
      ['expenseRatio', SECURITY_EXPENSE_RATIO_SELECTOR],
      ['name', SECURITY_NAME_SELECTOR],
      ['perf3yr', SECURITY_PERF_3YR_SELECTOR],
      ['symbol', SECURITY_SYMBOL_SELECTOR]
    ]
  }
})(selectors);

exports.urls = (() => {
  const BASE_URL = 'https://dashboard.m1finance.com';

  return {
    INITIAL: `${BASE_URL}/login`,
    RESEARCH_FUNDS: `${BASE_URL}/d/research/funds`
  }
})();