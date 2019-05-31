const cssSelectors = require('./_cssSelectors');

const mappings = {
  securityResultsMapping: [
    ['symbol', {
      columnHeader: "Symbol",
      selector: cssSelectors.SECURITY__SYMBOL
    }],
    ['name', {
      columnHeader: "Name",
      selector: cssSelectors.SECURITY__NAME
    }],
    ['divYield', {
      columnHeader: "Div. Yield",
      selector: cssSelectors.SECURITY__DIV_YIELD
    }],
    ['perf3yr', {
      columnHeader: "3 Yr Performance",
      selector: cssSelectors.SECURITY__PERF_3YR
    }],
    ['perf5yr', {
      columnHeader: "5 Yr Performance",
      selector: cssSelectors.SECURITY__PERF_5YR
    }],
    ['expenseRatio', {
      columnHeader: "Expense Ratio",
      selector: cssSelectors.SECURITY__EXPENSE_RATIO
    }]
  ]
};

module.exports = mappings;