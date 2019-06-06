const { researchResults } = require('./_cssSelectors');

const mappings = {
  securityResultsMapping: [
    ['name', {
      columnHeader: "Name",
      selector: researchResults.NAME__VALUE_SELECTOR
    }],
    ['symbol', {
      columnHeader: "Symbol",
      selector: researchResults.SYMBOL__VALUE_SELECTOR
    }],
    ['divYield', {
      columnHeader: "Div. Yield",
      selector: researchResults.DIV_YIELD__VALUE_SELECTOR
    }],
    ['expenseRatio', {
      columnHeader: "Expense Ratio",
      selector: researchResults.EXPENSE_RATIO__VALUE_SELECTOR
    }],
    // ['perf3yr', {
    //   columnHeader: "3 Yr Performance",
    //   selector: researchResults.PERF__YR_VALUE_SELECTOR
    // }],
    ['perf5yr', {
      columnHeader: "5 Yr Performance",
      selector: researchResults.PERF__YR_VALUE_SELECTOR
    }]
  ]
};

module.exports = mappings;