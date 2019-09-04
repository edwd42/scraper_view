<<<<<<< HEAD
// @ts-nocheck
import React from 'react'
import '../styles/App.css'
import { AppContext } from "../App"

const leftAlign = { textAlign: "left" }
const collapse = { visibility: "collapse" }

const Watchlist = () => (

  <AppContext.Consumer>
    {data => (
      <React.Fragment>
        {
          Object.values(data.watchlist).map((wl, i) => {
            if (wl.timeStamp === data.newestScape) {
              return (
                <table className="table" style={collapse}>
                  <caption>Time Stamp for this scrape: {wl.timeStamp}</caption>
                  <thead>
                    <tr>
                      {/* <th>Time Stamp</th> */}
                      <th style={leftAlign}>Symbol</th>
                      <th>Last Price</th>
                      <th>Todays Change</th>
                      <th>Volume</th>
                      <th>Market Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={i}>
                      {/* <td>{wl.timeStamp}</td> */}
                      <td style={leftAlign}>{wl.symbol}</td>
                      <td>{wl.lastPrice}</td>
                      <td>{wl.todaysChange}</td>
                      <td>{wl.volume}</td>
                      <td>{wl.marketCap}</td>
                    </tr>
                  </tbody>
                </table>
              )
            } else if (i === 0) {
              return (
                <table className="table" style={collapse}>
                  <caption>Time Stamp for this scrape: {wl.timeStamp}</caption>
                  <thead>
                    <tr>
                      {/* <th>Time Stamp</th> */}
                      <th style={leftAlign}>Symbol</th>
                      <th>Last Price</th>
                      <th>Todays Change</th>
                      <th>Volume</th>
                      <th>Market Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={i}>
                      {/* <td>{wl.timeStamp}</td> */}
                      <td style={leftAlign}>{wl.symbol}</td>
                      <td>{wl.lastPrice}</td>
                      <td>{wl.todaysChange}</td>
                      <td>{wl.volume}</td>
                      <td>{wl.marketCap}</td>
                    </tr>
                  </tbody>
                </table>
              )
            } else {
              return (
                <table className="table">
                  <thead style={collapse}>
                    <tr>
                      {/* <th>Time Stamp</th> */}
                      <th>Symbol</th>
                      <th>Last Price</th>
                      <th>Todays Change</th>
                      <th>Volume</th>
                      <th>Market Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={i}>
                      <td style={leftAlign}>{wl.symbol}</td>
                      <td>{wl.lastPrice}</td>
                      <td>{wl.todaysChange}</td>
                      <td>{wl.volume}</td>
                      <td>{wl.marketCap}</td>
                    </tr>
                  </tbody>
                </table>
              )
=======
import React, { Component } from 'react'
import $ from 'jquery';
import './styles/App.css'

export default class Watchlist extends Component {

    constructor() {
		super()
		this.state = {
            watchlist: [],
            timeStamp: null,
            isLoading: false
        }
        this.handleClickGetLastScrape = this.handleClickGetLastScrape.bind(this)
        this.handleClickGetScrapeHistory = this.handleClickGetScrapeHistory.bind(this)

    }
    
    UNSAFE_componentWillMount(){
        this.getLastScrape()
    }

    componentDidMount(){
        this.setState({isLoading: true})
    }

    // could not get fetch to work correctly
    // this.state.watchlist throws an error
    // getData(){
    //     fetch('http://localhost:8081/rest/api/findLastScrape/')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .then(data => {
    //         this.setState({
    //             isLoading: false,
    //             watchlist: data
    //         })
    //     })
    //     console.log("this.state.watchlist.length == ", this.state.watchlist.length)
    // }

    getLastScrape(){
        $.ajax({
            url: 'http://localhost:8081/rest/api/findLastScrape/',
            dataType:'json',
            cache: false,
            success: function(data){
                this.setState({
                    watchlist: data,
                    isLoading: false
                });
                console.log("getData() returns ", data);
                console.log("this.state.watchlist.length == ", this.state.watchlist.length)
            }.bind(this),
            error: function(xhr, status, err){
                console.log("err " + err);
                console.log("status " + status);
                console.log("xhr.response " + xhr.responseText);
>>>>>>> old-login
            }
          })
        }
      </React.Fragment>
    )}
  </AppContext.Consumer>
);

export default Watchlist