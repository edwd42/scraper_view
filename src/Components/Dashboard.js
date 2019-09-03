// @ts-nocheck
import React, { createContext } from 'react'
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
			<span>Hello, {user.firstname}</span>
		)}
	</Consumer>
)

export const Dashboard = props => (
	<AppContext.Consumer>
		{data => (

			< React.Fragment >
				<div>
					<div><br /><Profile /></div>
					<div>
						<p>
							<button onClick={data.handleClickNewScrape}>New Scrape</button>
							<span>&nbsp;&nbsp;&nbsp;</span>
							<select value={data.value} onChange={(event) => data._onSelect(event)}>
								<option selected="selected">Previous Scrapes</option>
								{data.values.map((item) => (
									<option key={item} value={item}>
										{new Date(item).toLocaleString()}
									</option>
								))}
							</select>
						</p>
					</div>
				</div>
			</React.Fragment>
		)}
	</AppContext.Consumer>
)
