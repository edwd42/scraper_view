import React, { Component } from 'react'
// import reactDOM from 'react-dom'
import './styles/_loginSty.scss'
import LoginBox from  './LoginBox'
import RegisterBox from './RegisterBox'


export default class Login_Register extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false,
      isRegisterOpen: true
    };
  }

	showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
	}
	
	render() {

		return (
			
			<div className="root-container">
			<h1>Hello, please login or register</h1>
			        <div className="box-controller">
          <div
            className={"controller " + (this.state.isLoginOpen
            ? "selected-controller"
            : "")}
            onClick={this
            .showLoginBox
            .bind(this)}>
            Login
          </div>
          <div
            className={"controller " + (this.state.isRegisterOpen
            ? "selected-controller"
            : "")}
            onClick={this
            .showRegisterBox
            .bind(this)}>
            Register
          </div>
        </div>
      	{this.state.isLoginOpen && <LoginBox/>}
      	{this.state.isRegisterOpen && <RegisterBox/>}
			</div>
		)
	}
}
