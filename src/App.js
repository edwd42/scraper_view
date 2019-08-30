import React, { Component, createContext } from 'react';
import { Route, Switch } from "react-router-dom";

import { LandingPage } from "./components/landingPage";
import { AppLayout } from "./components/appLayout";
import { ProtectedRoute } from "./components/protectedRoute";
import Login from "./components/Login";

const DataContext = createContext();

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      watchlist: ["mt watchlist"],
      user: {},
      // logout: () => this.logout()
    }
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login}/>
            <ProtectedRoute exact path="/app" component={AppLayout} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </DataContext.Provider>
    );
  }
}

export { App as default, DataContext };