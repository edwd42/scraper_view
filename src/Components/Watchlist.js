import React from 'react';

const watchlist = (props) => {
	return (
        <div className="Watchlist">
            <h3>Watchlist</h3>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Last Price</th>
                    <th>Market Time</th>
                    <th>Volume</th>
                    <th>Market Cap</th>
                </tr>
                </thead>

                <tbody>
                {
                    Object.values(props.watchlist).map((watchlist,i) => {
                        return (
                            <tr key={i}>
                                <td>{watchlist.symbol}</td>
                                <td>{watchlist.lastPrice}</td>
                                <td>{watchlist.marketTime}</td>
                                <td>{watchlist.volume}</td>
                                <td>{watchlist.marketCap}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
	)
}

export default watchlist;