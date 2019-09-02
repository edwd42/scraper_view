class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    console.log("login called")
    setTimeout(cb, 100) // fake async
  }

  logout(cb) {
    this.authenticated = false;
    console.log("logout called")
    // setTimeout(cb, 100) // fake async
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
