// @ts-nocheck
import React from 'react'
import { Link } from "react-router-dom";
import '../styles/App.css'
import { AppContext } from "../App"

const Snapshots = () => (

	<AppContext.Consumer>
		{data => (
			<React.Fragment>
				{
					Object.values(data.snapshots).map((ss, i) => {
						{
							return(
							<table className="table">
								<tbody>
									<tr key={i}>
										<td><Link to={`/watchlist/${ss}`}>{ss}</Link></td>
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

export default Snapshots