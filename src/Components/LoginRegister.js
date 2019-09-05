import React, { useState } from "react";
import "./styles/_loginSty.scss";
import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox";
import Header from "./Header";

// const Login_RegisterContext = createContext(0);

const LoginRegister = props => {
  console.log(props);

  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // showLoginBox() {
  const showLoginBox = () => {
    setIsLoginOpen(prevIsLoginOpen => !prevIsLoginOpen);
    setIsRegisterOpen(prevIsRegisterOpen => !prevIsRegisterOpen);
  };

  // showRegisterBox() {
  const showRegisterBox = () => {
    setIsLoginOpen(prevIsLoginOpen => !prevIsLoginOpen);
    setIsRegisterOpen(prevIsRegisterOpen => !prevIsRegisterOpen);
  };

  // render() {
  return (
    <>
      {/* <Login_RegisterContext value={props}> */}
      <Header />
      <div className="root-container">
        <h1>Welcome, please login or register</h1>
        <div className="box-controller">
          <div
            className={
              "controller " + (isLoginOpen ? "selected-controller" : "")
            }
            onClick={showLoginBox}
          >
            Login
          </div>
          <div
            className={
              "controller " + (isRegisterOpen ? "selected-controller" : "")
            }
            onClick={showRegisterBox}
          >
            Register
          </div>
        </div>
        {isLoginOpen && <LoginBox />}
        {isRegisterOpen && <RegisterBox />}
      </div>
      {/* </Login_RegisterContext> */}
    </>
  );
  // }
};

export default LoginRegister;
