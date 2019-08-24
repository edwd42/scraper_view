import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Watchlist from './components/Watchlist'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      isLoggedIn: true
    }
  }

  render(){
    let status
    this.state.isLoggedIn ? status = "in" : status = "out"

    return (
      <div className="App">
        <Header/>
        <h1>You are currently logged { status }</h1>
        <Watchlist/>
        
      </div>
    );
  }

}
