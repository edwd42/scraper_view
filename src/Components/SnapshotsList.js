// @ts-nocheck
import React from 'react'
import { Link } from "react-router-dom";
import '../styles/App.css'
import { AppContext } from "../App"

const nodots = { listStyleType: "none" }

const SnapshotsList = () => (

	<AppContext.Consumer>
		{data => (
			<React.Fragment>
				{
					Object.values(data.snapshotTimeStamps).map((ss, i) => {
						{
							return (
								<ul key={i} style={nodots}>
									<li><Link to={`/snapshot/${ss}`}>{ss}</Link></li>
								</ul>
							)
						}
					})
				}
			</React.Fragment>
		)}
	</AppContext.Consumer>
);

export default SnapshotsList