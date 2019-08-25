import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Watchlist from './components/Watchlist'
import Login_Register from './components/Login_Register'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      isLoginOpen: true,
      isRegisterOpen: false
    }
  }

  render(){
    let status
    this.state.isLoggedIn ? status = "in" : status = "out"

    if (!this.state.isLoggedIn){
      return (
        <div className="App">
          <Header/>
          <h1>You are currently logged { status }</h1>
          <Login_Register/>
      </div>
      )
    }
    return (
      <div className="App">
        <Header/>
        <h1>You are currently logged { status }</h1>
        <Watchlist/>
        
      </div>
    );
  }

}
