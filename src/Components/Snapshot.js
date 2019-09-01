// @ts-nocheck
import React from 'react'
import '../styles/App.css'
import { AppContext } from "../App"

const leftAlign = { textAlign: "left" }
const collapse = { visibility: "collapse" }

const Snapshot = () => (

  <AppContext.Consumer>
    {data => (
      <React.Fragment>
        {
          Object.values(data.watchlist).map((wl, i) => {
						// console.log(wl)
						if(wl.timeStamp === data.timeStampFromURL){
						return (
							<table className="table">
								<caption>Time Stamp for this scrape: {data.timeStampFromURL}</caption>
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
						}
          })
        }
      </React.Fragment>
    )}
  </AppContext.Consumer>
);

export default Snapshot