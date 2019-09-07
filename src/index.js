import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./components/history";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";
import App from "./App";
// import { createBrowserHistory } from "history";

// https://github.com/fernandoporazzi/react-router-react-context-api/blob/master/src/js/index.js
// const history = createBrowserHistory();

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
