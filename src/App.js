// @ts-nocheck
import React, { Component, createContext } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';
import { LandingPage } from "./components/landingPage";
import { AppLayout } from "./components/appLayout";
import { ProtectedRoute } from "./components/protectedRoute";
import Login from "./components/Login";
import Data from "./components/Data"
import Watchlist from './components/Watchlist';
import Snapshot from "./components/Snapshot"


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
    // console.log(this.state.watchlist)

    this.handleClickGetLastScrape = this.handleClickGetLastScrape.bind(this)
    this.handleClickGetScrapeHistory = this.handleClickGetScrapeHistory.bind(this)

  }

  UNSAFE_componentWillMount() {
    console.log("inside UNSAFE_componentWillMount()")
  }

  componentDidMount() {
    console.log("inside componentDidMount()")
    // console.log(this.state.watchlist)
  }

  componentWillUnmount() {
    console.log("inside componentWillUnMount()")
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
        // console.log(data)
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
  }

  render() {

    const timeStampFromURL = window.location.pathname.substr(-13,13)
    console.log(timeStampFromURL)

    let timeStampSnapshotArr = Data.makeTimeStampSnapshotArr(this.state.watchlist)
    let timeStampSnapshotSet = Data.makeTimeStampSnapshotSet(this.state.watchlist)
    console.log([...timeStampSnapshotArr])
    console.log(timeStampSnapshotSet)
    console.log(Math.max(...timeStampSnapshotSet))

    const data = {
      watchlist: this.state.watchlist,
      snapshots: [...timeStampSnapshotSet.values()],
      timeStampFromURL: timeStampFromURL,
      newestScape: Math.max(...timeStampSnapshotSet)
    }

    return (
      <AppContext.Provider value={data}>
        {this.props.children}
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/app" component={AppLayout} />
            <ProtectedRoute exact path="/watchlist" component={Watchlist} />
            <ProtectedRoute exact path="/snapshot/:timeStampFromURL" component={Snapshot} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </AppContext.Provider>
    );
  }
}

export { App as default, AppContext };