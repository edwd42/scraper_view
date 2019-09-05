// @ts-nocheck
import React, { createContext } from "react";
import "../assets/styles/App.css";
import { AppContext } from "../App";

const { Consumer } = createContext({
  user: {
    firstname: "Ed"
  }
});

const Profile = () => (
  <Consumer>{({ user }) => <span>Hello, {user.firstname}</span>}</Consumer>
);

export const Dashboard = props => (
  <AppContext.Consumer>
    {data => (
      <React.Fragment>
        <div>
          <div>
            <br />
            <Profile />
          </div>
          <div>
            <p>
              <button
                className="button"
                onClick={data.handleClickNewScrape}
                disabled={data.loading}
              >
                {data.loading && (
                  <i className="fas fa-sync" style={{ marginRight: "5px" }} />
                )}
                {data.loading && <span>Loading Data</span>}
                {!data.loading && <span>New Scrape</span>}
              </button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <select
                value={data.value}
                onChange={event => data._onSelect(event)}
              >
                <option selected="selected">Previous Scrapes</option>
                {data.values.map(item => (
                  <option key={item} value={item}>
                    {new Date(item).toLocaleString()}
                  </option>
                ))}
              </select>
            </p>
          </div>
        </div>
      </React.Fragment>
    )}
  </AppContext.Consumer>
);
