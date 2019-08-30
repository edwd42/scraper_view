// @ts-nocheck
import React from 'react'
import '../styles/App.css'
import { AppContext } from "../App"

const leftAlign = { textAlign: "left" }

const Watchlist = () => (

  <AppContext.Consumer>
    {data => (
      <React.Fragment>
        <p>
          <button onClick={data.handleClickGetLastScrape}>New Scrape</button>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <button onClick={data.handleClickGetScrapeHistory}>Scrape History</button>
        </p>
        <table className="table">
          <caption>Market Time of this Scrape: {data.timeStamp}</caption>
          <thead>
            <tr>
              <th style={leftAlign}>Symbol</th>
              <th>Last Price</th>
              <th>Todays Change</th>
              <th>Percent Change</th>
              <th>Volume</th>
              <th>Market Cap</th>
            </tr>
          </thead>

          <tbody>
            {
              Object.values(data.watchlist).map((wl, i) => {
                return (
                  <tr key={i}>
                    <td style={leftAlign}>{wl.symbol}</td>
                    <td>{wl.lastPrice}</td>
                    <td>{wl.todaysChange}</td>
                    <td>{wl.percentChange}</td>
                    <td>{wl.volume}</td>
                    <td>{wl.marketCap}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </React.Fragment>
    )}
  </AppContext.Consumer>
);

export default Watchlist