const { cssSelectors } = require('../config');
const {
  LOGIN__USERNAME_INPUT,
  LOGIN__PASSWORD_INPUT,
  LOGIN__SUBMIT_BUTTON
} = cssSelectors;
const { 
  M1_LOGIN_EMAIL,
  M1_LOGIN_PASSWORD
} = process.env;

const login = async function () {
  console.log('LOGIN_START\n');
  try {
    await this.waitForSelectors([
      LOGIN__USERNAME_INPUT,
      LOGIN__PASSWORD_INPUT,
      LOGIN__SUBMIT_BUTTON
    ]);
    await this.page.type(LOGIN__USERNAME_INPUT, M1_LOGIN_EMAIL),
    await this.page.type(LOGIN__PASSWORD_INPUT, M1_LOGIN_PASSWORD)
    await this.clickAndWaitForNav({ selector: LOGIN__SUBMIT_BUTTON });
    console.log('LOGIN_END\n');
  
    return Promise.resolve(); 
  } catch (err) {
    return Promise.reject(`Error logging in.\n${err}`);
  }
};

module.exports = login;
