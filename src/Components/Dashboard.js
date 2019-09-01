// @ts-nocheck
import React, { createContext } from 'react'
import auth from "./auth";
import '../styles/App.css'
import { AppContext } from "../App"

const { Consumer } = createContext({
	user: {
		firstname: "Ed",
	}
})


const Profile = () => (
	<Consumer>
		{({ user }) => (
			<div>Hello, {user.firstname}</div>
		)}
	</Consumer>
)

const Dashboard = (props) => (
	<AppContext.Consumer>
		{data => (
			<React.Fragment>
				<div>
					<div><Profile /></div>
					<button
						onClick={() => {
							auth.logout(() => {
								props.history.push("/");
							});
						}}
					>
						Logout
          </button>
					<div>
						<p>
							<button onClick={data.handleClickGetLastScrape}>New Scrape</button>
							<span>&nbsp;&nbsp;&nbsp;</span>
							<button onClick={data.handleClickGetScrapeHistory}>Scrape History</button>
						</p>
					</div>
				</div>
			</React.Fragment>
		)}
	</AppContext.Consumer>
)

export default Dashboard