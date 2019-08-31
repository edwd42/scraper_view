import React, { createContext } from 'react';
import auth from "./auth";
import Header from './Header';
import Watchlist from './Watchlist';
import Snapshots from './Snapshots';

const { Consumer } = createContext({
  user: {
    firstname: "Ed",
  }
})

const Profile = () => (
  <Consumer>
    {({ user }) => (
      <div>Hello, {user.firstname}</div>
    )}
  </Consumer>
)

const Dashboard = () => <div><Profile /></div>

export const AppLayout = (props) => {

  return (
    <div>
      <Header/>
      <h2>App Layout</h2>
      <Dashboard/>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
      <Watchlist/>
      <Snapshots/>
    </div>
  );
};
