// @ts-nocheck
class Data {

	constructor() {
    this.authenticated = true;
	}

	makeTimeStampSnapshotSet(watchlist){
		console.log(watchlist)
		let snapshotSet = new Set();

		for (let i in watchlist){
			snapshotSet.add(watchlist[i].timeStamp)
		}

		return snapshotSet
	}

	makeTimeStampSnapshotArr(watchlist){
		console.log(watchlist.length)
		var timeStampSnapshotArr = []
		var timeStampSnapshotMapArr = []
		var timeStampSnapshotMap = new Map();

		for (let i = 1, len = watchlist.length; i < len; i++) {
			timeStampSnapshotMap.clear()
				if(watchlist[i].timeStamp === watchlist[i-1].timeStamp){
					timeStampSnapshotMap.set(String(watchlist[i].timeStamp+":"+watchlist[i].symbol), watchlist[i])
					timeStampSnapshotMapArr.push(timeStampSnapshotMap.get(String(watchlist[i].timeStamp+":"+watchlist[i].symbol)))
					// console.log(timeStampSnapshotMapArr)
				} else {
					timeStampSnapshotArr.push(timeStampSnapshotMapArr)
					timeStampSnapshotMapArr = []
				}
		} 

		timeStampSnapshotMapArr = []
		timeStampSnapshotMap.clear()

		console.log(timeStampSnapshotArr)
		// console.log([...timeStampSnapshotArr.values()])

		return timeStampSnapshotArr;
	}

	makeTimeStampMap(watchlist){
		var timeStampMap = new Map();
		
		for (let i in watchlist){
			timeStampMap.set(String(watchlist[i].timeStamp)+":"+watchlist[i].symbol, watchlist[i])
		}
		return timeStampMap;
	}
	
}

export default new Data();