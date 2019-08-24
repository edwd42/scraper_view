import React, { Component } from 'react'
import $ from 'jquery';
import { getDefaultWatermarks } from 'istanbul-lib-report';

class Watchlist extends Component {

    constructor() {
		super()
		this.state = {
			watchlist:[]
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    UNSAFE_componentDidMount(){
        this.getData();
    }

    getData(){
        $.ajax({
            url: 'http://localhost:8081/rest/api/findLastScrape/',
            dataType:'json',
            cache: false,
            success: function(data){
				console.log(data);
                this.setState({watchlist: data});
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
        this.setState({watchlist: this.getData()})
    }

    render(){
        return (
            <div>
                <h3>Watchlist</h3>
                <button onClick={this.handleClick}>New Scrape</button>
                <div>
                    <span>{ this.watchlist }</span>
                </div>
            </div>
        )
    }
}

export default Watchlist;