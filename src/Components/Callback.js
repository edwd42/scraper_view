// import React, { Component } from "react";
import React from "react";
import history from "./history";
import auth from "./Auth";
import Header from "./Header";
import Snapshot from "./Snapshot";

import { Dashboard } from "./Dashboard";

// export default class Callback extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Loading...</h1>
//       </div>
//     );
//   }
// }

const AppLayout = props => {
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

export default AppLayout;
