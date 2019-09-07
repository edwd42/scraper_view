import React from "react";
import PropTypes from "prop-types";
// import { withRouter } from "react-router";
import auth from "./Auth";
import Header from "./Header";

import yahoo_finance from "../assets/images/yahoo_finance.png";

export const LandingPage = props => {
  console.log({ props });
  // console.log(props.history);
  // console.log(props.match);
  // console.log(props.location);

  const propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  console.log(propTypes.history);

  return (
    <div>
      <Header />
      {/* <LoginBox />
      <RegisterBox /> */}
      <button
        // onClick={this.props.auth.login}
        onClick={() => {
          auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>

      <div className="flex-container">
        <div id="article">
          <article>
            <p>
              <em>
                A CareerDevs web scraper project demonstrating basic principles
                of web scraping.&nbsp;&nbsp;
              </em>
              With a made up Yahoo Finance portfolio of 10 stocks, I implement
              several web technologies, frameworks and libraries including Java,
              Selenium and Spring Boot to scrape data from Yahoo Finance and
              display it to the user. Design Patterns guided my development
              process, including Singleton Pattern, Factory Pattern and State
              Pattern adapted from the book Design Patterns - Elements of
              Reusable Object-oriented Software, by Gang of Four, 1994.
            </p>
          </article>
        </div>
        <div id="img">
          <img src={yahoo_finance} alt="Yahoo Finance Watchlist Page" />
        </div>
      </div>
    </div>
  );
};
