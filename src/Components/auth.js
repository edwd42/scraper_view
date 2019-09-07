/*eslint no-restricted-globals : 0*/
import auth0 from "auth0-js";

const LOGIN_SUCCESS_PAGE = "/app";
const LOGIN_FAILED_PAGE = "/";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
