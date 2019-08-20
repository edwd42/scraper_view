import React from 'react';

const watchlist = (props) => {
	return (
		<div>
			<p>I'm a little teapot!</p>
			<p>Symbol: { props.symbol }</p>
			<p>Last Price: { props.lastPrice }</p>
		</div>
	)
}

export default watchlist;