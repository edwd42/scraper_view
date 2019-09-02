// @ts-nocheck
import React, { Component, createContext } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';
import { LandingPage } from "./components/landingpage";
import { AppLayout } from "./components/applayout";
import { ProtectedRoute } from "./components/protectedroute";
import Login from "./components/Login";
import Data from "./components/Data"
// import Watchlist from './components/Watchlist';
import Snapshot from "./components/Snapshot"
import axios from 'axios';

const AppContext = createContext();

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      watchlist: ["mt"],
      timeStamp: null,
      isLoading: true,
      isDropdown: true,
      logout: () => this.logout(),
      user: {
        firstname: "Ed"
      }
    }

    // this.watchlist = []

    // this.findAllStocks()
    // console.log(this.state.watchlist)
    // Data.makeNewScrape(this.state.watchlist)

    this.handleClickGetLastScrape = this.handleClickGetLastScrape.bind(this)
    this.handleClickGetScrapeHistory = this.handleClickGetScrapeHistory.bind(this)
    this.handleClickDropdown = this.handleClickDropdown.bind(this)
    this.handleClickNewScrape = this.handleClickNewScrape.bind(this)

  }

  // UNSAFE_componentWillMount() {
  //   // console.log("inside UNSAFE_componentWillMount()")
  //   // this.findAllStocks()
  //   // console.log(this.state.watchlist)
  //   // Data.makeNewScrape(this.state.watchlist)
  // }

  componentDidMount() {
    // console.log("inside componentDidMount()")
    // console.log(this.state.watchlist)
    this.findAllStocks()
    Data.makeNewScrape(this.state.watchlist)
  }

  // componentWillUnmount() {
  //   console.log("inside componentWillUnMount()")
  // }

  handleClickDropdown(event) {
    event.preventDefault()
    console.log("Dropdown got clicked")
    this.setState(
      state => ({
        isDropdown: !state.isDropdown
      })
    )
  }

  async handleClickNewScrape() {
    // event.preventDefault()
    console.log("New Scrape button clicked")

    try {
      let response = await axios.get(`http://localhost:8081/scrape`)
      if (response) {
        this.setState({ watchlist: response.data });
        await this.findAllStocks()
      }

    } catch (err) {
      console.log(err);
    }

    console.log(this.state.watchlist)
    let newScrape = Data.makeNewScrape(this.state.watchlist)
    console.log(newScrape)
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

    // console.log(this.state.watchlist)

    // const timeStampFromURL = window.location.pathname.substr(-13, 13)
    // console.log(timeStampFromURL)

    let newScrape = Data.makeNewScrape(this.state.watchlist)
    // console.log(newScrape)

    // let timeStampSnapshotArr = Data.makeTimeStampSnapshotArr(this.state.watchlist)
    let timeStampSet = Data.makeTimeStampSet(this.state.watchlist)
    // console.log([...timeStampSnapshotArr])
    // console.log(timeStampSet)
    // console.log(Math.max(...timeStampSet))

    const data = {
      watchlist: this.state.watchlist,
      newScrape: newScrape,
      handleClickDropdown: () => { this.handleClickDropdown() },
      handleClickNewScrape: () => { this.handleClickNewScrape() },
      // handleClickNewScrape: () => { console.log("New Scrape got clicked") },
      snapshotTimeStamps: [...timeStampSet.values()],
      // timeStampFromURL: timeStampFromURL,
      // newestScape: Math.max(...timeStampSet)
    }

    // { console.log(data.snapshotTimeStamps) }


    return (
      <AppContext.Provider value={data}>
        {this.props.children}
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/app" component={AppLayout} />
            {/* <ProtectedRoute exact path="/watchlist" component={Watchlist} /> */}
            <ProtectedRoute exact path="/snapshot/:timeStampFromURL" component={Snapshot} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </AppContext.Provider>
    );
  }
}

export { App as default, AppContext };
