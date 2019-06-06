
const cssSelectors = {
  BODY_LOADING: 'body.pace-running',
  BODY_LOADED: 'body.pace-done',

  login: {
    USERNAME_INPUT: 'input[name=username]',
    PASSWORD_INPUT: 'input[name=password]',
    SUBMIT_BUTTON: 'button[type=submit]',
  },

  researchResults: {
    DIV_YIELD__HEADER_SELECTOR: `thead > tr[class*=tableRow] > th:nth-of-type(3)`,
    DIV_YIELD__VALUE_SELECTOR: 'td:nth-of-type(3)',
    EXPENSE_RATIO__VALUE_SELECTOR: 'td:nth-of-type(5) [class*=label] > span',
    NAME__VALUE_SELECTOR: 'td:nth-of-type(1) [class*=size_small]',
    NEXT_BUTTON_SELECTOR: '[class*=titleBar] [class*=direction_horizontal] > button:nth-of-type(2)',
    PERF__PRICE_HISTORY_HEADER_SELECTOR: `thead > tr[class*=tableRow] > th:nth-of-type(4)`,
    PERF__1YR_HEADER_SELECTOR: 'div.style__group__3QkMI > span:nth-of-type(1)',
    PERF__3YR_HEADER_SELECTOR: 'div.style__group__3QkMI > span:nth-of-type(2)',
    PERF__5YR_HEADER_SELECTOR: 'div.style__group__3QkMI > span:nth-of-type(3)',
    PERF__YR_VALUE_SELECTOR: 'td:nth-of-type(4) > [class*=performanceCell] > div > span > span > span:nth-of-type(2)',
    ROW_SELECTOR: 'tbody > tr[class*=tableRow]',
    SYMBOL__VALUE_SELECTOR: 'td:nth-of-type(1) [class*=size_caption]',   
  }
};

// SECURITY__PERF_5YR_POS: 'td:nth-of-type(4) > [class*=performanceCell] [class*=positive] > span:nth-of-type(3)',

module.exports = cssSelectors;