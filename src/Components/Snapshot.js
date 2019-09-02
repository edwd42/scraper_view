// @ts-nocheck
import React from 'react'
import '../styles/App.css'
import { AppContext } from "../App"

const leftAlign = { textAlign: "left" }
const collapse = { visibility: "collapse" }
const hide = { display: "none" }

const Snapshot = () => (

	<AppContext.Consumer>
		{data => (
			<React.Fragment>
				{console.log(data.newScrape)}
				{
					Object.values(data.newScrape).map((wl, i) => {
						if (i === 0) {
							return (
								<table className="table">
									<caption>Time Stamp for this scrape: {wl.timeStamp}</caption>
									<thead>
										<tr>
											<th style={leftAlign}>Symbol</th>
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
						} else {
							return (
								<table className="table">
									<caption style={hide}>Time Stamp for this scrape: {wl.timeStamp}</caption>
									<thead style={collapse}>
										<tr>
											<th style={leftAlign}>Symbol</th>
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

export default Snapshot