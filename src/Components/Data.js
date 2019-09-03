// @ts-nocheck
class Data {

	constructor() {
		this.authenticated = true;
	}

	makeNewScrape(watchlist) {
		var newest = this.makeTimeStampSet(watchlist)
		newest = Math.max(...newest)
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
		return newScrape
	}

	makePreviousScrape(previousScrape, watchlist) {
		let priorScrape = []
		try {
			if (watchlist) {
				for (let i = 0; i < watchlist.length; i++) {
					if (watchlist[i].timeStamp == previousScrape) {
						// console.log(watchlist[i].timeStamp)
						// this.formatDate(watchlist[i].timeStamp)
						// watchlist[i].timeStamp = this.formatDate(watchlist[i].timeStamp)
						// console.log(watchlist[i].timeStamp)
						priorScrape.push(watchlist[i])
					}
				}
			}
		} catch (err) {
			console.log(err);
		}
		return priorScrape
	}

	makeTimeStampSet(watchlist) {
		let snapshotSet = new Set();

		for (let i in watchlist) {
			snapshotSet.add(watchlist[i].timeStamp)
		}

		return snapshotSet
	}

	makeTimeStampSnapshotArr(watchlist) {
		var timeStampSnapshotArr = []
		var timeStampSnapshotMapArr = []
		var timeStampSnapshotMap = new Map();

		for (let i = 1, len = watchlist.length; i < len; i++) {
			timeStampSnapshotMap.clear()
			if (watchlist[i].timeStamp === watchlist[i - 1].timeStamp) {
				timeStampSnapshotMap.set(String(watchlist[i].timeStamp + ":" + watchlist[i].symbol), watchlist[i])
				timeStampSnapshotMapArr.push(timeStampSnapshotMap.get(String(watchlist[i].timeStamp + ":" + watchlist[i].symbol)))
			} else {
				timeStampSnapshotArr.push(timeStampSnapshotMapArr)
				timeStampSnapshotMapArr = []
			}
		}
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