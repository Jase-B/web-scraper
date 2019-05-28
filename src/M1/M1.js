const WebPage = require('../WebPage');
const { mappings, urls } = require('./M1.config');
const { selectors } = require('./M1.constants');


module.exports = M1;

function M1 () {
  WebPage.call(this, urls.initial);

  this.logIn = logIn.bind(this);
  this.harvestFundsData = harvestFundsData.bind(this);
}

const logIn = async function () {
  const {
    login: {
      LOGIN_INPUT_USERNAME_SELECTOR,
      LOGIN_INPUT_PASSWORD_SELECTOR,
      LOGIN_BUTTON_SELECTOR
    }
  } = selectors;

  const { 
    M1_LOGIN_EMAIL,
    M1_LOGIN_PASSWORD
  } = process.env;

  await this.waitForSelectors([
    LOGIN_INPUT_USERNAME_SELECTOR,
    LOGIN_INPUT_PASSWORD_SELECTOR,
    LOGIN_BUTTON_SELECTOR
  ]);
  await this.page.type(LOGIN_INPUT_USERNAME_SELECTOR, M1_LOGIN_EMAIL),
  await this.page.type(LOGIN_INPUT_PASSWORD_SELECTOR, M1_LOGIN_PASSWORD)
  await this.clickAndWaitForNav({ selector: LOGIN_BUTTON_SELECTOR });

  return Promise.resolve();
};

const harvestFundsData = async function () {
  const { PAGINATION_NEXT_SELECTOR } = selectors;
  const RESULT_SET_LIMIT = 1;
  let currResultSetNum = 1;
  let securities = [];

  await this.page.goto(urls.researchFunds);
  await sortResultsByDivYieldAndPerf.call(this);

  while (currResultSetNum <= RESULT_SET_LIMIT) {
    securities.push(...await getSecuritiesByPerf3Yr.call(this));

    if (currResultSetNum < RESULT_SET_LIMIT) {
      await this.page.click(PAGINATION_NEXT_SELECTOR);
      await this.page.waitFor(500);
    }

    currResultSetNum++;
  }

  // console.log(securities)
  console.log(securities.length)

  return Promise.resolve();
};

const sortResultsByDivYieldAndPerf = async function () {
  const {
    table: {
      TABLE_HEADER_DIV_YIELD_SELECTOR,
      TABLE_HEADER_PERF_3YR_SELECTOR
    }
  } = selectors;

  await this.waitForSelectors([TABLE_HEADER_PERF_3YR_SELECTOR, TABLE_HEADER_DIV_YIELD_SELECTOR]);
  await this.page.click(TABLE_HEADER_PERF_3YR_SELECTOR);
  await this.page.waitForSelector(`${TABLE_HEADER_PERF_3YR_SELECTOR}[class*=activePeriod]`);
  await this.clickAndWaitForNav({ selector: TABLE_HEADER_DIV_YIELD_SELECTOR });

  return Promise.resolve();
};

const getSecuritiesByPerf3Yr = function () {
  const {
    table: { TABLE_ROW_SELECTOR }
  } = selectors;

  return this.page.evaluate((TABLE_ROW_SELECTOR, mappings) => {
    const securities = [];
    const getInnerTextOfElem = elem => elem ? elem.innerText : null;
    const rows = Array.from(document.querySelectorAll(TABLE_ROW_SELECTOR));
    const map = new Map(mappings.securityPropToSelector);

    for (const row of rows) {
      const security = {};

      map.forEach((selector, securityProp) => {
        security[securityProp] = getInnerTextOfElem(row.querySelector(selector));
      });

      securities.push(security);
    }

    return securities;
  }, TABLE_ROW_SELECTOR, mappings);
};

M1.prototype = Object.create(WebPage.prototype);

// divYield: parseFloat(divYield),
// expenseRatio: parseFloat(expenseRatio) || 0,
// name: name.replace(/&amp;/g, '&'),
// perf3yr: parseFloat(perf3yr),
// symbol