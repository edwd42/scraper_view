import React from 'react'

function Conditional(props){
	// setTimeout(() => {
	// 	console.log(props.isLoading)
	// }, 1500)

	if(props.isLoading === true){
		return (
			<h1>Loading...</h1>
		)
	} else {
		return (
			<h1>Done loading.</h1>
		)
	}
}

export default Conditional