const WebPage = require('../WebPage/WebPage');
const { urls, selectors } = require('./M1.config');

module.exports = M1;

function M1 () {
  WebPage.call(this, urls.initial);

  this.logIn = logIn.bind(this);
  this.harvestFundsData = harvestFundsData.bind(this);
}

const logIn = async function () {
  const { login } = selectors;
  const {
    M1_LOGIN_EMAIL,
    M1_LOGIN_PASSWORD
  } = process.env;

  await this.waitForSelectors(Object.values(login));
  await this.page.type(login.LOGIN_INPUT_USERNAME, M1_LOGIN_EMAIL),
  await this.page.type(login.LOGIN_INPUT_PASSWORD, M1_LOGIN_PASSWORD)
  await this.clickAndWaitForNav({ selector: login.LOGIN_BUTTON });

  return Promise.resolve();
};

const harvestFundsData = async function () {
  const {
    PAGINATION_NEXT,
    resultsTable: { TABLE_ROW },
    security: { SECURITY_NAME, SECURITY_PERFORMANCE_3YR }
  } = selectors;
  const PAGINATION_PAGE_LIMIT = 1;
  let securities = [];

  await this.page.goto(urls.researchFunds);
  await sortResultsByDivYieldAndPerf.call(this);

//   const test = await this.page.evaluate(selectors => {
//     const {
//       resultsTable: { TABLE_ROW },
//       security: { SECURITY_NAME }
//     } = selectors;

//     const elem = document.querySelector(`${TABLE_ROW} ${SECURITY_NAME}`);
//     console.log(elem)
//     return elem.innerText;
//   }, selectors);
// console.log(test)

//   const rows = await this.getElemsBySelector(TABLE_ROW);
// console.log(rows)
  for (let i = 0; i < PAGINATION_PAGE_LIMIT; i++) {
    // const tableRowHandles = await this.getHandlesBySelector({
    //   handles: await this.page.$$(TABLE_ROW),
    //   selector: SECURITY_PERFORMANCE_3YR,
    // });

    const targetSecurites = await getSecuritiesByPerf3Yr.call(this);
console.log(targetSecurites)
    // securities.push(...secObjs);

    // await this.page.click(PAGINATION_NEXT);
    // await this.page.waitFor(500);

    // console.log('PAGINATION_NEXT')
  }

  // console.log(securities)
  // console.log(securities.length)

  return Promise.resolve();
};

const sortResultsByDivYieldAndPerf = async function () {
  const {
    resultsTable: {
      TABLE_HEADER_DIV_YIELD,
      TABLE_HEADER_PERF_3YR
    }
  } = selectors;

  await this.waitForSelectors([TABLE_HEADER_PERF_3YR, TABLE_HEADER_DIV_YIELD]);
  await this.page.click(TABLE_HEADER_PERF_3YR);
  await this.page.waitForSelector(`${TABLE_HEADER_PERF_3YR}[class*=activePeriod]`);
  await this.clickAndWaitForNav({ selector: TABLE_HEADER_DIV_YIELD });

  return Promise.resolve();
};

const getSecuritiesByPerf3Yr = async function () {
  return this.page.evaluate(selectors => {
    const {
      resultsTable: { TABLE_ROW },
      security: {
        SECURITY_DIV_YIELD,
        SECURITY_EXPENSE_RATIO,
        SECURITY_NAME,
        SECURITY_PERFORMANCE_3YR,
        SECURITY_SYMBOL
      }
    } = selectors;
    const rows = Array.from(document.querySelectorAll(TABLE_ROW));
    const securities = rows.map(row => {
      const security = {
        divYield: row.querySelector(SECURITY_DIV_YIELD).innerText,
        // expenseRatio: row.querySelector(SECURITY_EXPENSE_RATIO).innerText,
        name: row.querySelector(SECURITY_NAME).innerText,
        perf3yr: row.querySelector(SECURITY_PERFORMANCE_3YR).innerText,
        symbol: row.querySelector(SECURITY_SYMBOL).innerText
      };

      return security;
    });


    return securities;
  }, selectors);
};

const _createSecurityObjectsFromHandles = async function (handles) {
  const {
    security: {
      SECURITY_DIV_YIELD,
      SECURITY_EXPENSE_RATIO,
      SECURITY_NAME,
      SECURITY_PERFORMANCE_3YR,
      SECURITY_SYMBOL
    }
  } = selectors;
  let securities = [];

  for (const handle of handles) {
    const divYield = await this.getSelectorValueFromHandle({
      handle,
      selector: SECURITY_DIV_YIELD
    });
    const expenseRatio = await this.getSelectorValueFromHandle({
      handle,
      selector: SECURITY_EXPENSE_RATIO
    });
    const name = await this.getSelectorValueFromHandle({
      handle,
      selector: SECURITY_NAME
    });
    const perf3yr = await this.getSelectorValueFromHandle({
      handle,
      selector: SECURITY_PERFORMANCE_3YR
    });
    const symbol = await this.getSelectorValueFromHandle({
      handle,
      selector: SECURITY_SYMBOL
    });

    securities.push({
      divYield: parseFloat(divYield),
      expenseRatio: parseFloat(expenseRatio) || 0,
      name: name.replace(/&amp;/g, '&'),
      perf3yr: parseFloat(perf3yr),
      symbol
    });
  }

  return Promise.resolve(securities);
};

M1.prototype = Object.create(WebPage.prototype);
