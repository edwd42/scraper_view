import React, { Component, createContext } from 'react';
import { Route, Switch } from "react-router-dom";

import { LandingPage } from "./components/landingPage";
import { AppLayout } from "./components/appLayout";
import { ProtectedRoute } from "./components/protectedRoute";

const { Provider } = createContext({})

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
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
            <ProtectedRoute exact path="/app" component={AppLayout} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

