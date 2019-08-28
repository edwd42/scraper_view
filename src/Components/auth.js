class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    console.log("login called")
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    console.log("logout called")
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
