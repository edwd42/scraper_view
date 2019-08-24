import React, { Component } from 'react'
// import $ from 'jquery';

class Watchlist extends Component {

    constructor() {
		super()
		this.state = {
            watchlist:[],
            isLoaded: false
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    
    // UNSAFE_componentDidMount(){
    //     // this.getData();
    // }

    // getData(){
    //     $.ajax({
    //         url: 'http://localhost:8081/rest/api/findLastScrape/',
    //         dataType:'json',
    //         cache: false,
    //         success: function(data){
    //             this.setState({watchlist: data});
    //             console.log("getData() returns ", data);
    //         }.bind(this),
    //         error: function(xhr, status, err){
    //             console.log("err " + err);
    //             console.log("status " + status);
    //             console.log("xhr.response " + xhr.responseText);
    //         }
    //     });

    // }

    // handleClick(event){
    //     event.preventDefault()
    //     // const data = this.getData()
    //     // this.setState({watchlist: data})
    //     console.log("inside handleClick() ", this.props.watchlist)
    // }

    render(){
        
        console.log(this.props)
        return (
            <div>
                {/* <h3>Watchlist</h3> */}
                {/* <button onClick={this.handleClick}>New Scrape</button> */}
                {/* <div>{watchlistComponents}</div> */}
                <p>{this.props.symbol} {this.props.timeStamp}</p>
            </div>
        )
    }

}

export default Watchlist;