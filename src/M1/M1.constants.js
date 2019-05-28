exports.selectors = {
  login: {
    LOGIN_INPUT_USERNAME_SELECTOR: 'input[name=username]',
    LOGIN_INPUT_PASSWORD_SELECTOR: 'input[name=password]',
    LOGIN_BUTTON_SELECTOR: 'button[type=submit]',
  },

  PAGINATION_NEXT_SELECTOR: '[class*=titleBar] [class*=direction_horizontal] > button:nth-of-type(2)',

  security: {
    SECURITY_DIV_YIELD_SELECTOR: 'td:nth-of-type(3)',
    SECURITY_EXPENSE_RATIO_SELECTOR: 'td:nth-of-type(5) [class*=label] > span',
    SECURITY_NAME_SELECTOR: 'td:nth-of-type(1) [class*=size_small]',
    SECURITY_PERF_3YR_SELECTOR: 'td:nth-of-type(4) > [class*=performanceCell] > div > span > span > span:nth-of-type(2)',
    // perf3yrPos: 'td:nth-of-type(4) > [class*=performanceCell] [class*=positive] > span:nth-of-type(2)',
    // perf5yr: 'td:nth-of-type(4) > [class*=performanceCell] [class*=positive] > span:nth-of-type(3)',
    SECURITY_SYMBOL_SELECTOR: 'td:nth-of-type(1) [class*=size_caption]'
  },
  table: {
    TABLE_HEADER_DIV_YIELD_SELECTOR: 'tr[class*=tableRow] > th:nth-of-type(3)',
    TABLE_HEADER_PERF_3YR_SELECTOR: 'div.style__group__3QkMI > span:nth-of-type(2)',
    TABLE_HEADER_PERF_5YR_SELECTOR: 'div.style__group__3QkMI > span:nth-of-type(3)',
    TABLE_ROW_SELECTOR: 'tbody > tr[class*=tableRow]'
  },
};