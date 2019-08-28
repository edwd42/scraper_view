import React from "react";
import auth from "./auth";
import Header from './Header'

export const AppLayout = props => {

  return (
    <div>
      <Header/>
      <h2>App Layout</h2>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};
