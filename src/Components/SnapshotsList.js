// @ts-nocheck
import React from 'react'
import { Link } from "react-router-dom";
import '../styles/App.css'
import { AppContext } from "../App"

const nodots = { listStyleType: "none" }

const Snapshots = () => (

	<AppContext.Consumer>
		{data => (
			<React.Fragment>
				{
					Object.values(data.snapshots).map((ss, i) => {
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

export default Snapshots