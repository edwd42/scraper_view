//Register Box 
import React, { Component } from 'react'
import './styles/_loginSty.scss'

export default class RegisterBox extends React.Component {

	constructor(props) {
	super(props);
	this.state = {};
	}

	submitRegister(e) {}

	showValidationErr(elm, msg) {
		this.setState((prevState) => ({
			errors: [
			...prevState.errors, {
				elm,
				msg
			}
			]
		}));
	}

	clearValidationErr(elm) {
		this.setState((prevState) => {
			let newArr = [];
			for (let err of prevState.errors) {
			if (elm != err.elm) {
				newArr.push(err);
			}
			}
			return {errors: newArr};
		});
	}

	//Update Username, password, and email on change event 
	onUsernameChange(e) {
		this.setState({username: e.target.value});
		//We want to clear the error when ever the user type something new 
		this.clearValidationErr("username");
	}

	onEmailChange(e) {
		this.setState({email: e.target.value});
		this.clearValidationErr("email");
	}

	onPasswordChange(e) {
		this.setState({password: e.target.value});
		this.clearValidationErr("password");
	}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="login-input" placeholder="Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitRegister
            .bind(this)}>Register</button>
        </div>
      </div>
    );
  }
}