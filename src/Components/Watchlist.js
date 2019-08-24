import React, { Component } from 'react'
import Conditional from './Conditional'
// import $ from 'jquery';

export default class Watchlist extends Component {

    constructor() {
		super()
		this.state = {
            watchlist:[],
            isLoading: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    UNSAFE_componentWillMount(){
        console.log(this.state.isLoading)
    }

    componentDidMount(){
        // this.getData();
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
            console.log(this.state.isLoading)
        }, 1500)
    }

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

    handleClick(event){
        event.preventDefault()
        // const data = this.getData()
        // this.setState({watchlist: data})
        console.log("inside handleClick() ")
    }

    render(){
        
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/>
                
                {/* <h3>Watchlist</h3> */}
                <button onClick={this.handleClick}>New Scrape</button>
                {/* <div>{watchlistComponents}</div> */}
                {/* <p>{this.props.symbol} {this.props.timeStamp}</p> */}
            </div>
        )
    }

}
