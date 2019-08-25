import React from 'react'

function Conditional(props){

	return props.isLoading ? <h1>Please wait while I fetch some data...</h1> : <h1>Done loading.</h1>
}

export default Conditional