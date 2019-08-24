import React, { Component } from 'react'
import $ from 'jquery';

class Watchlist extends Component {

    constructor() {
		super()
		this.state = {
			watchlist:[]
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    componentDidMount(){

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
        console.log("working!!!")
    }
    render(){
        return (
            <div>
                <h3>Watchlist</h3>
                <button onClick={this.handleClick}>New Scrape</button>
            </div>
        )
    }
}

export default Watchlist;