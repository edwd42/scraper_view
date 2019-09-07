import React from "react";
import history from "./history";
import auth from "./Auth";
import Header from "./Header";
import Snapshot from "./Snapshot";

import { Dashboard } from "./Dashboard";

export const AppLayout = props => {
  console.log({ props });
  return (
    <React.Fragment>
      <div>
        <Header />
        <button
          onClick={() => {
            auth.logout(() => {
              history.push("/");
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
