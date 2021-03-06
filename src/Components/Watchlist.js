// @ts-nocheck
import React from 'react'
import '../styles/App.css'
import { AppContext } from "../App"

const leftAlign = { textAlign: "left" }
const collapse = { visibility: "collapse" }

const Watchlist = () => (

  <AppContext.Consumer>
    {data => (
      <React.Fragment>
        {
          Object.values(data.watchlist).map((wl, i) => {
            if (wl.timeStamp === data.newestScape) {
              return (
                <table className="table" style={collapse}>
                  <caption>Time Stamp for this scrape: {wl.timeStamp}</caption>
                  <thead>
                    <tr>
                      {/* <th>Time Stamp</th> */}
                      <th style={leftAlign}>Symbol</th>
                      <th>Last Price</th>
                      <th>Todays Change</th>
                      <th>Volume</th>
                      <th>Market Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={i}>
                      {/* <td>{wl.timeStamp}</td> */}
                      <td style={leftAlign}>{wl.symbol}</td>
                      <td>{wl.lastPrice}</td>
                      <td>{wl.todaysChange}</td>
                      <td>{wl.volume}</td>
                      <td>{wl.marketCap}</td>
                    </tr>
                  </tbody>
                </table>
              )
            } else if (i === 0) {
              return (
                <table className="table" style={collapse}>
                  <caption>Time Stamp for this scrape: {wl.timeStamp}</caption>
                  <thead>
                    <tr>
                      {/* <th>Time Stamp</th> */}
                      <th style={leftAlign}>Symbol</th>
                      <th>Last Price</th>
                      <th>Todays Change</th>
                      <th>Volume</th>
                      <th>Market Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={i}>
                      {/* <td>{wl.timeStamp}</td> */}
                      <td style={leftAlign}>{wl.symbol}</td>
                      <td>{wl.lastPrice}</td>
                      <td>{wl.todaysChange}</td>
                      <td>{wl.volume}</td>
                      <td>{wl.marketCap}</td>
                    </tr>
                  </tbody>
                </table>
              )
            } else {
              return (
                <table className="table">
                  <thead style={collapse}>
                    <tr>
                      {/* <th>Time Stamp</th> */}
                      <th>Symbol</th>
                      <th>Last Price</th>
                      <th>Todays Change</th>
                      <th>Volume</th>
                      <th>Market Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={i}>
                      <td style={leftAlign}>{wl.symbol}</td>
                      <td>{wl.lastPrice}</td>
                      <td>{wl.todaysChange}</td>
                      <td>{wl.volume}</td>
                      <td>{wl.marketCap}</td>
                    </tr>
                  </tbody>
                </table>
              )
            }
          })
        }
      </React.Fragment>
    )}
  </AppContext.Consumer>
);

export default Watchlist