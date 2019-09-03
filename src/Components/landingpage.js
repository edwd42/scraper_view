import React from "react";
import auth from "./auth";
import Header from './Header'

export const LandingPage = props => {
  return (
    <div>
      <Header/>
      <h2>Landing Page</h2>
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
