import React, { useState, createContext } from "react";
import "./styles/_loginSty.scss";
import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox";
import Header from "./Header";

const initialValue = "Data";
export const UserContext = createContext(initialValue);

// function LoginRegister(props) {
export const LoginRegister = props => {
  console.log({ props });
  console.log(props.history);

  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // // showLoginBox() {
  // const showLoginBox = () => {
  //   setIsLoginOpen(prevIsLoginOpen => !prevIsLoginOpen);
  //   setIsRegisterOpen(prevIsRegisterOpen => !prevIsRegisterOpen);
  // };

  // // showRegisterBox() {
  // const showRegisterBox = () => {
  //   setIsLoginOpen(prevIsLoginOpen => !prevIsLoginOpen);
  //   setIsRegisterOpen(prevIsRegisterOpen => !prevIsRegisterOpen);
  // };

  // showLoginBox() {
  const showLoginBox = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  // showRegisterBox() {
  const showRegisterBox = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  // const data = {
  //   props: this.props.history
  // };

  return (
    <React.Fragment>
      <UserContext.Provider value={initialValue}>
        {/* {props.children} */}
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
      </UserContext.Provider>
    </React.Fragment>
  );
};

export default LoginRegister;
