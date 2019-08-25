import React, { Component } from 'react'
import $ from 'jquery';
import '../App.css'

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
            }
        });
    }

    getScrapeHistory(){
        $.ajax({
            url: 'http://localhost:8081/rest/api/findAllStocks/',
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
            }
        });

        let timeStampH
        for (let i = 0; i < this.state.watchlist.length; i++){
            // console.log(this.state.watchlist[i]['timeStamp'])
            timeStampH = this.state.watchlist[i]['timeStamp']
        }
        console.log(timeStampH)

    }

    handleClickGetLastScrape(event){
        event.preventDefault()
        this.getLastScrape()
        console.log("inside handleClick() ", this.state.watchlist.length)
    }

    handleClickGetScrapeHistory(event){
        event.preventDefault()
        this.getScrapeHistory()
        console.log("inside handleClick() ", this.state.watchlist.length)
    }

    render(){
        const leftAlign = { textAlign: "left" }

        let timeStamp
        for (let i = 0; i < this.state.watchlist.length; i++){
            // console.log(this.state.watchlist[i]['timeStamp'])
            timeStamp = this.state.watchlist[i]['timeStamp']
        }
        console.log(timeStamp)
        
        console.log(this.state.isLoading)
        const dataTable = this.state.isLoading ? 
        <h1>"Please wait while I fetch some data..."</h1> : 
        <table className="table">
            <thead>
            <tr>
                <th style={leftAlign}>Symbol</th>
                <th>Last Price</th>
                <th>Volume</th>
                <th>Market Cap</th>
            </tr>
            </thead>

            <tbody>
            {
                Object.values(this.state.watchlist).map((watchlist,i) => {
                    return (
                        <tr key={i}>
                            <td style={leftAlign}>{watchlist.symbol}</td>
                            <td>{watchlist.lastPrice}</td>
                            <td>{watchlist.volume}</td>
                            <td>{watchlist.marketCap}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>

        return (
            <div>
                <p>
                    <button onClick={this.handleClickGetLastScrape}>New Scrape</button>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <button onClick={this.handleClickGetScrapeHistory}>Scrape History</button>
                </p>
                <span>Market Time of this Scrape: {timeStamp}</span>
                <div>{ dataTable }</div>
            </div>
        )
    }

}
