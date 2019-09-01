import React, { createContext } from 'react';

import Header from './Header';
import Snapshot from './Snapshot';
// import Watchlist from './Watchlist';
// import SnapshotsList from './SnapshotsList';

import Dashboard from "./Dashboard"
// import { AppContext } from "../App"

export const AppLayout = () => {

  return (
    // <AppContext.Consumer>
    //   {data => (
        <React.Fragment>
          <div>
            <Header />
            <h2>App Layout</h2>
            <Dashboard />
            {/* <Watchlist /> */}
            <Snapshot />
          </div>
        {/* // ); */}
        </React.Fragment>
    //   )}
    // </AppContext.Consumer>
  )
};
