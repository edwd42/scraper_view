//Login Box
import React, { Component } from 'react'
import './styles/_loginSty.scss'


export default class LoginBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isRegistered: false,
			isLoggedIn: false
		};
	}

	submitLogin(e) {}

	render() {
		return (
			<div className="inner-container">
				<div className="header">
				Login
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
					.submitLogin
					.bind(this)}>Login</button>
					<a href="#" style={{padding:"10px"}}>Forgot your password?</a>
				</div>
			</div>
		);
	}
}