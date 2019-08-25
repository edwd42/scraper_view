import React, { Component } from 'react'
// import Conditional from './Conditional'
import $ from 'jquery';

export default class Watchlist extends Component {

    constructor() {
		super()
		this.state = {
            watchlist: [],
            isLoading: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    UNSAFE_componentWillMount(){
        console.log(this.state.isLoading)
        this.getData();
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

    getData(){
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

    handleClick(event){
        event.preventDefault()
        this.getData()
        console.log("inside handleClick() ", this.state.watchlist.length)
    }

    render(){
        const dataTable = this.state.isLoading ? 
        <h1>"Please wait while I fetch some data..."</h1> : 
        <table className="table">
            <thead>
            <tr>
                <th>Symbol</th>
                <th>Last Price</th>
                <th>Market Time</th>
                <th>Volume</th>
                <th>Market Cap</th>
            </tr>
            </thead>

            <tbody>
            {
                Object.values(this.state.watchlist).map((watchlist,i) => {
                    return (
                        <tr key={i}>
                            <td>{watchlist.symbol}</td>
                            <td>{watchlist.lastPrice}</td>
                            <td>{watchlist.marketTime}</td>
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
                <p><button onClick={this.handleClick}>New Scrape</button></p>
                <div>{ dataTable }</div>
            </div>
        )
    }

}
