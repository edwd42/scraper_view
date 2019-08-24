import React, { Component } from 'react'

class Watchlist extends Component {

    constructor(props) {
		super(props);
		this.state = {
			watchlist:[]
		}
	}

    render(){
        return (
            <h3>Watchlist</h3>
        )
    }
}

export default Watchlist;