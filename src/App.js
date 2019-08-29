import React, { Component, createContext } from 'react';
import { Route, Switch } from "react-router-dom";

import { LandingPage } from "./components/landingPage";
import { AppLayout } from "./components/appLayout";
import { ProtectedRoute } from "./components/protectedRoute";
import Login from "./components/Login";

// const { Provider } = createContext({})
const Context = React.createContext();

const { Provider, Consumer } = Context;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      watchlist: [],
      user: {},
      logout: () => this.logout()
    }
  }


  render() {

    return (
      <Provider value={this.state}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login}/>
            <ProtectedRoute exact path="/app" component={AppLayout} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

// https://github.com/fernandoporazzi/react-router-react-context-api/blob/master/src/js/Context.js
export {App as default, Consumer};