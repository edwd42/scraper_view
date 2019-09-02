// @ts-nocheck
import React, { createContext } from 'react'
// import auth from "./auth";
import '../styles/App.css'
import '../styles/Dropdown.css'
import { AppContext } from "../App"

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


const options = ["Select previous scrape"]
const defaultOption = options[""]

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
			<React.Fragment>
				<div>
					<div><br/><Profile /></div>
					{/* <button
						onClick={() => {
							auth.logout(() => {
								props.history.push("/");
							});
						}}
					>
						Logout
          </button> */}
					<div>
						<p>
							<button onClick={data.handleClickNewScrape}>New Scrape</button>
							<span>&nbsp;&nbsp;&nbsp;</span>
							<Dropdown className='dropdown' options={data.snapshotTimeStamps} onClick={data.handleClickDropdown} value={defaultOption} placeholder="History" />
						</p>
					</div>
				</div>
			</React.Fragment>
		)}
	</AppContext.Consumer>
)

// export default Dashboard