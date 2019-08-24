import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Watchlist from './components/Watchlist'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render(){
  return (
    <div className="App">
      <Header/>
      <Watchlist/>
      
    </div>
  );
  }

}
