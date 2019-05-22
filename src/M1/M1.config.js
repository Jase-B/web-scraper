const BASE_URL = 'https://dashboard.m1finance.com';

exports.urls = {
  initial: `${BASE_URL}/login`,
  researchFunds: `${BASE_URL}/d/research/funds`
};

exports.selectors = {
  login: {
    LOGIN_INPUT_USERNAME: 'input[name=username]',
    LOGIN_INPUT_PASSWORD: 'input[name=password]',
    LOGIN_BUTTON: 'button[type=submit]'
  },

  PAGINATION_NEXT: '[class*=titleBar] [class*=direction_horizontal] > button:nth-of-type(2)',

  resultsTable: {
    TABLE_HEADER_DIV_YIELD: 'tr[class*=tableRow] > th:nth-of-type(3)',
    TABLE_HEADER_PERF_3YR: 'div.style__group__3QkMI > span:nth-of-type(2)',
    TABLE_HEADER_PERF_5YR: 'div.style__group__3QkMI > span:nth-of-type(3)',
    TABLE_ROW: 'tbody > tr[class*=tableRow]'
  },

  security: {
    SECURITY_DIV_YIELD: 'td:nth-of-type(3)',
    SECURITY_EXPENSE_RATIO: 'td:nth-of-type(5) [class*=label] > span',
    SECURITY_NAME: 'td:nth-of-type(1) [class*=size_small]',
    SECURITY_PERFORMANCE_3YR: 'td:nth-of-type(4) > [class*=performanceCell] > div > span > span > span:nth-of-type(2)',
    SECURITY_PERFORMANCE_3YR_POS: 'td:nth-of-type(4) > [class*=performanceCell] [class*=positive] > span:nth-of-type(2)',
    SECURITY_PERFORMANCE_5YR: 'td:nth-of-type(4) > [class*=performanceCell] [class*=positive] > span:nth-of-type(3)',
    SECURITY_SYMBOL: 'td:nth-of-type(1) [class*=size_caption]'
  }
};