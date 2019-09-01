// @ts-nocheck
import React from 'react'
import { Link } from "react-router-dom";
import '../styles/App.css'
import { AppContext } from "../App"

const ulnodots = { listStyleType: "none" }
// const timeStamp =({ match }) => <li>{match.params.timeStamp}</li>
// const params = new URLSearchParams(props.location.search);
// const timeStamp = params.get('ss'); 

const Snapshots = () => (

	<AppContext.Consumer>
		{data => (
			<React.Fragment>
				{
					Object.values(data.snapshots).map((ss, i) => {
						{
							return(
									<ul key={i} style={ulnodots}>
										<li><Link to={`/watchlist/${ss}`}>{ss}</Link></li>
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