import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./components/history";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";
import App from "./App";
// import Auth from "./components/Auth";
// import { createBrowserHistory } from "history";

// https://github.com/fernandoporazzi/react-router-react-context-api/blob/master/src/js/index.js
// const history = createBrowserHistory();

// https://blog.tretainfotech.com/posts/2018/october/reactjs-authentication-with-auth0-part-1-configure-your-auth0-account/
// https://blog.tretainfotech.com/posts/2018/october/react-js-authentication-with-auth0-part-2/
// https://youtu.be/JIHDS1x_EYU?t=831

// const auth = new Auth();

// let state = {};
// window.setState = changes => {
//   state = Object.assign({}, state, changes);

//   ReactDOM.render(
//     <Router history={history}>
//       <App {...state} />
//     </Router>,
//     document.getElementById("root")
//   );
// };

// /* eslint no-restricted-globals:0*/
// let initialState = {
//   name: "Me",
//   location: location.pathname.replace(/^\/?|\/$/g, "")
// };

// window.setState(initialState);

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
