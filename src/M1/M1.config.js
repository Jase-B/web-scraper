const BASE_URL = 'https://dashboard.m1finance.com';
const { selectors } = require('./M1.constants');

exports.mappings = ((selectors) => {
  const {
    security: {
      SECURITY_DIV_YIELD_SELECTOR,
      SECURITY_EXPENSE_RATIO_SELECTOR,
      SECURITY_NAME_SELECTOR,
      SECURITY_PERF_3YR_SELECTOR,
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

exports.urls = {
  initial: `${BASE_URL}/login`,
  researchFunds: `${BASE_URL}/d/research/funds`
};