//Login Box
import React, { useContext } from "react";
import history from "./history";

import "./styles/_loginSty.scss";
import auth from "./auth";
import { UserContext } from "./LoginRegister";

const LoginBox = props => {
  console.log({ props });
  console.log(history);

  const user = useContext(UserContext);

  return (
    <>
      <div className="inner-container">
        <div className="header">Login</div>

        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
            />
          </div>

          {/* <button
					type="button"
					className="login-btn"
					onClick={this
					.submitLogin
					.bind(this)}>Login</button> */}

          <button
            type="button"
            className="login-btn"
            onClick={() => {
              auth.login(() => {
                history.push("/app");
              });
            }}
          >
            Login
          </button>

          {/* <a href="#" style={{ padding: "10px" }}>
            Forgot your password?
          </a> */}
        </div>
      </div>
    </>
  );
};

export default LoginBox;
