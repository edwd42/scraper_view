import React from "react";
import auth from "./auth";
import Header from "./header";
import Snapshot from "./Snapshot";

import { Dashboard } from "./Dashboard";

export const AppLayout = props => {
  return (
    <React.Fragment>
      <div>
        <Header />

        <button
          onClick={() => {
            auth.logout(() => {
              props.history.push("/");
            });
          }}
        >
          Logout
        </button>
        <Dashboard />
        <Snapshot />
      </div>
    </React.Fragment>
  );
};
