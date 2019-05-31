const cssSelectors = {
  LOGIN__USERNAME_INPUT: 'input[name=username]',
  LOGIN__PASSWORD_INPUT: 'input[name=password]',
  LOGIN__SUBMIT_BUTTON: 'button[type=submit]',

  SECURITY__DIV_YIELD: 'td:nth-of-type(3)',
  SECURITY__EXPENSE_RATIO: 'td:nth-of-type(5) [class*=label] > span',
  SECURITY__NAME: 'td:nth-of-type(1) [class*=size_small]',
  SECURITY__PERF_3YR: 'td:nth-of-type(4) > [class*=performanceCell] > div > span > span > span:nth-of-type(2)',
  SECURITY__PERF_3YR_POS: 'td:nth-of-type(4) > [class*=performanceCell] [class*=positive] > span:nth-of-type(2)',
  SECURITY__PERF_5YR: 'td:nth-of-type(4) > [class*=performanceCell] > div > span > span > span:nth-of-type(3)',
  SECURITY__PERF_5YR_POS: 'td:nth-of-type(4) > [class*=performanceCell] [class*=positive] > span:nth-of-type(3)',
  SECURITY__SYMBOL: 'td:nth-of-type(1) [class*=size_caption]',

  RESEARCH_RESULTS__NEXT_BUTTON: '[class*=titleBar] [class*=direction_horizontal] > button:nth-of-type(2)',
  RESEARCH_RESULTS__ROW_: 'tbody > tr[class*=tableRow]',
  RESEARCH_RESULTS__TABLE_HEADER__DIV_YIELD: 'tr[class*=tableRow] > th:nth-of-type(3)',
  RESEARCH_RESULTS__TABLE_HEADER__PERF_3YR: 'div.style__group__3QkMI > span:nth-of-type(2)',
  RESEARCH_RESULTS__TABLE_HEADER__PERF_5YR: 'div.style__group__3QkMI > span:nth-of-type(3)',
  RESEARCH_RESULTS__TABLE_ROW: 'tbody > tr[class*=tableRow]'
};

module.exports = cssSelectors;