import React from 'react';
import './App.css';
import Watchlist from './Components/Watchlist';

export default class App extends React.Component {

	state = {
		watchlist:[
			{ 
				symbol: 'AAPL',
				lastPrice: '211.24',
				marketTime: '10:10AM EDT',
				volume: '2 B',
				marketCap: '954.767 M'
			}
		]
	}

	render() {
		return (
			<div className="App">
				<h1>CareerDevs Capstone Scraper Project - MVP</h1>
				<Watchlist symbol={this.state.watchlist[0].symbol} lastPrice={this.state.watchlist[0].lastPrice}/>
				
			</div>
		);
	}


}

