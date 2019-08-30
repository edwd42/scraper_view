// @ts-nocheck
import React, { Component, createContext } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';
import { LandingPage } from "./components/landingPage";
import { AppLayout } from "./components/appLayout";
import { ProtectedRoute } from "./components/protectedRoute";
import Login from "./components/Login";

const AppContext = createContext();

class App extends Component {

  constructor() {
    super()
    this.state = {
      watchlist: ["mt"],
      timeStamp: null,
      isLoading: true,
    }

    this.watchlist = []
    this.findAllStocks()

    this.handleClickGetLastScrape = this.handleClickGetLastScrape.bind(this)
    this.handleClickGetScrapeHistory = this.handleClickGetScrapeHistory.bind(this)

    console.log(this.state.watchlist)
    console.log(this.state.isLoading)
  }

  UNSAFE_componentWillMount() {
    console.log("inside UNSAFE_componentWillMount()")
    // this.findAllStocks()
  }

  componentDidMount() {
    console.log("inside componentDidMount()")
    console.log(this.state.watchlist)
  }

  handleClickGetLastScrape(event) {
    event.preventDefault()
  }

  handleClickGetScrapeHistory(event) {
    event.preventDefault()
  }

  findAllStocks() {
    console.log("inside findAllStocks()")
    $.ajax({
      url: "http://localhost:8081/rest/api/findAllStocks/",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({
            watchlist: data
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log("err " + err);
        console.log("status " + status);
        console.log("xhr.response " + xhr.responseText);
      }
    });
    console.log(this.state.watchlist)

  }

  render() {

    let timeStamp = 0;
    for (let i = 0, len = this.state.watchlist.length; i < len; i++){
        timeStamp = this.state.watchlist[i]['timeStamp']
    }
    console.log(timeStamp)



    const data = {
      watchlist: this.state.watchlist,
      timeStamp: timeStamp
    }

    return (
      <AppContext.Provider value={data}>
        {this.props.children}
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/app" component={AppLayout} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </AppContext.Provider>
    );
  }
}

export { App as default, AppContext };