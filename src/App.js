import React from 'react';
import $ from 'jquery';
import './App.css';
import Watchlist from './Components/Watchlist';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			watchlist:[]
		}
	}

	// make api request in lifecycle functions
    UNSAFE_componentWillMount(){
        this.getWatchlist();
	}
    

	getWatchlist(){
        $.ajax({
            url: 'http://localhost:8081/rest/watchlist/findAllWatchlists/',
            dataType:'json',
            cache: false,
            success: function(data){
				console.log(data);
                this.setState({watchlist: data}, function(){
                });
            }.bind(this),
            error: function(xhr, status, err){
                console.log("err" + err);
                console.log("xhr.response " + xhr.responseText);
            }
        });
	}
	
	render() {
		return (
			<div className="App">
				<h1>CareerDevs Capstone Scraper Project - MVP</h1>
				{/* <Watchlist symbol={this.state.watchlist[0].symbol} lastPrice={this.state.watchlist[0].lastPrice}/> */}
				<Watchlist watchlist={this.state.watchlist} />
			</div>
		);
	}


}

