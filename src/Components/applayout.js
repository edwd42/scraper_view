import React from 'react';

import Header from './Header';
import Snapshot from './Snapshot';

import {Dashboard} from "./Dashboard"

export const AppLayout = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <div>
        <Header />
        <h2>App Layout</h2>
        <Dashboard />
        <Snapshot />
      </div>
    </React.Fragment>
  )
};
