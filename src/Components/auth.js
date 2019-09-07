/*eslint no-restricted-globals : 0*/
import auth0 from "auth0-js";

const LOGIN_SUCCESS_PAGE = "/app";
const LOGIN_FAILED_PAGE = "/";

class Auth {
  // https://blog.tretainfotech.com/posts/2018/october/react-js-authentication-with-auth0-part-2/
  auth0 = new auth0.WebAuth({
    domain: "yfs-dev0.auth0.com",
    clientID: "TsMwJZv80beTOCDS7z0YfXewScYp5jLw",
    redirectUri: "http://localhost:3000/callback",
    audiance: "https://yfs-dev0.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile"
  });

  handleAuthentication() {
    this.authenticated = true;
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let expiresAt = JSON.stringify(
          authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
        location.hash = "";
        location.pathname = LOGIN_SUCCESS_PAGE;
      } else {
        location.pathname = LOGIN_FAILED_PAGE;
      }
    });
  }

  constructor() {
    this.authenticated = false;
    this.login = this.login.bind(this);
  }

  login(cb) {
    this.auth0.authorize();
    // this.authenticated = true;
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
