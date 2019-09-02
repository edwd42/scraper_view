// @ts-nocheck
class Data {

	constructor() {
		this.authenticated = true;
	}

	makeNewScrape(watchlist) {
		var newest = this.makeTimeStampSet(watchlist)
		newest = Math.max(...newest)
		// console.log(newest)

		let newScrape = []

		try {
			if (watchlist) {
				for (let i = 0; i < watchlist.length; i++) {
					if (watchlist[i].timeStamp === newest) {
						newScrape.push(watchlist[i])
					}
				}
			}
		} catch (err) {
			console.log(err);
		}

		// console.log(newScrape)
		return newScrape

	}


	makeTimeStampSet(watchlist) {
		// console.log(watchlist)
		let snapshotSet = new Set();

		for (let i in watchlist) {
			snapshotSet.add(watchlist[i].timeStamp)
		}

		return snapshotSet
	}

	makeTimeStampSnapshotArr(watchlist) {
		console.log(watchlist.length)
		var timeStampSnapshotArr = []
		var timeStampSnapshotMapArr = []
		var timeStampSnapshotMap = new Map();

		for (let i = 1, len = watchlist.length; i < len; i++) {
			timeStampSnapshotMap.clear()
			if (watchlist[i].timeStamp === watchlist[i - 1].timeStamp) {
				timeStampSnapshotMap.set(String(watchlist[i].timeStamp + ":" + watchlist[i].symbol), watchlist[i])
				timeStampSnapshotMapArr.push(timeStampSnapshotMap.get(String(watchlist[i].timeStamp + ":" + watchlist[i].symbol)))
				// console.log(timeStampSnapshotMapArr)
			} else {
				timeStampSnapshotArr.push(timeStampSnapshotMapArr)
				timeStampSnapshotMapArr = []
			}
		}

		timeStampSnapshotMapArr = []
		timeStampSnapshotMap.clear()

		// console.log(timeStampSnapshotArr)
		// console.log([...timeStampSnapshotArr.values()])

		return timeStampSnapshotArr;
	}

	makeTimeStampMap(watchlist) {
		var timeStampMap = new Map();

		for (let i in watchlist) {
			timeStampMap.set(String(watchlist[i].timeStamp) + ":" + watchlist[i].symbol, watchlist[i])
		}
		return timeStampMap;
	}


}

export default new Data();