<<<<<<< HEAD
// @ts-nocheck
import React, { Component, createContext } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';
import { LandingPage } from "./components/landingpage";
import { AppLayout } from "./components/applayout";
import { ProtectedRoute } from "./components/protectedroute";
import Login from "./components/Login";
import about from "./components/About";
import Data from "./components/Data"
import Snapshot from "./components/Snapshot"
import axios from 'axios';

const AppContext = createContext();
=======
import React, { Component } from 'react'
import './components/styles/App.css'
import Header from './components/Header'
import Watchlist from './components/Watchlist'
import Login_Register from './components/Login_Register'
>>>>>>> old-login

class App extends Component {

<<<<<<< HEAD
  constructor(props) {
    super(props)
    this.state = {
      watchlist: ["mt"],
      timeStamp: null,
      loading: false,
      isDropdown: false,
      previousScrape: null,
      selected: 'mt',
      value: 'Scrape History',
      logout: () => this.logout(),
      user: {
        firstname: "Ed"
      }
=======
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      isLoginOpen: true,
      isRegisterOpen: false
>>>>>>> old-login
    }

    this.handleClickGetLastScrape = this.handleClickGetLastScrape.bind(this)
    this.handleClickGetScrapeHistory = this.handleClickGetScrapeHistory.bind(this)
    this._onSelect = this._onSelect.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
    this.handleClickNewScrape = this.handleClickNewScrape.bind(this)

  }

  componentDidMount() {
    this.findAllStocks()
    Data.makeNewScrape(this.state.watchlist)
  }

  _onSelect(e) {
    e.preventDefault();
    this.setState({ previousScrape: e.target.value });

    return this.state.previousScrape
  }

  _onSubmit(e) {
    e.preventDefault();
  }

  async handleClickNewScrape() {
    this.setState({
      previousScrape: null,
      loading: true
    });
    try {
      let response = await axios.get(`http://localhost:8081/scrape`)
      if (response) {
        this.setState({ watchlist: response.data });
        await this.findAllStocks()
      }
    } catch (err) {
      console.log(err);
    }

    this.setState({
      previousScrape: null,
      loading: false
    });
    console.log(this.state.loading)
    let newScrape = Data.makeNewScrape(this.state.watchlist)
  }

  handleClickGetLastScrape(event) {
    event.preventDefault()
  }

  handleClickGetScrapeHistory(event) {
    event.preventDefault()
  }

  findAllStocks() {
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
  }

  render() {

    let newScrape = Data.makeNewScrape(this.state.watchlist)
    let previousScrape = Data.makePreviousScrape(this.state.previousScrape, this.state.watchlist)
    let timeStampSet = Data.makeTimeStampSet(this.state.watchlist)
    let loading = this.state.loading

    const data = {
      newScrape: newScrape,
      previousScrape: previousScrape,
      _onSelect: (e) => { this._onSelect(e) },
      _onSubmit: (e) => { this._onSubmit(e) },
      handleClickNewScrape: () => { this.handleClickNewScrape() },
      values: [...timeStampSet.values()],
      formatDate: (epochTime) => { this.formatDate(epochTime) },
      loading: loading
    }

    if (!this.state.isLoggedIn){
      return (
        <div className="App">
          <Header/>
          <h1>You are currently logged { status }</h1>
          <Login_Register/>
      </div>
      )
    }
    return (
      <AppContext.Provider value={data}>
        {this.props.children}
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={about} />
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/app" component={AppLayout} />
            <ProtectedRoute exact path="/snapshot/:previousScrape" component={Snapshot} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </AppContext.Provider>
    );
  }
}

export { App as default, AppContext };
