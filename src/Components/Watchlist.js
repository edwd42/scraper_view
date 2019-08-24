import React, { Component } from 'react'

class Watchlist extends Component {

    constructor(props) {
		super(props);
		this.state = {
			watchlist:[]
		}
    }
    
    componentDidMount(){
        fetch("http://localhost:8081/rest/api/findLastScrape")
            .then(response => response.json())
            .then(response => {
                const {watchlist} = response.data
                console.log(watchlist[0])
                this.setState({ watchlist: watchlist })
            })
    }

    render(){
        return (
            <h3>Watchlist</h3>
        )
    }
}

export default Watchlist;