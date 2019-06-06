const { cssSelectors } = require('../config');
const {
  login: {
    USERNAME_INPUT,
    PASSWORD_INPUT,
    SUBMIT_BUTTON
  }
} = cssSelectors;
const { 
  M1_LOGIN_EMAIL,
  M1_LOGIN_PASSWORD
} = process.env;

const login = async function () {
  console.log('LOGIN_START\n');
  try {
    await this.waitForSelectors([
      USERNAME_INPUT,
      PASSWORD_INPUT,
      SUBMIT_BUTTON
    ]);
    await this.page.type(USERNAME_INPUT, M1_LOGIN_EMAIL),
    await this.page.type(PASSWORD_INPUT, M1_LOGIN_PASSWORD)
    await this.clickAndWaitForNav({ selector: SUBMIT_BUTTON });
    console.log('LOGIN_END\n');
  
    return Promise.resolve(); 
  } catch (err) {
    return Promise.reject(`Error logging in.\n${err}`);
  }
};

module.exports = login;
