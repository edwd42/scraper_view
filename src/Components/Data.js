// @ts-nocheck
class Data {

	constructor() {
    this.authenticated = true;
	}

	makeTimeStampSnapshotSet(watchlist){
		let snapshotSet = new Set();

		for (let i in watchlist){
			snapshotSet.add(watchlist[i].timeStamp)
			// console.log(snapshotSet.get(watchlist[i].timeStamp))
		}

		console.log(snapshotSet.size)
		// console.log(snapshotSet)

		let data = [...snapshotSet.values()];
		console.log(data)

		return snapshotSet

	}
			
	makeTimeStampSnapshotMap(watchlist){
		// console.log(watchlist)
		// console.log(watchlist.length)
		var timeStampSnapshotArr = []
		var timeStampSnapshotMap = new Map();
		
		for (let i in watchlist){
			if(i > 0){
				if(watchlist[i].timeStamp === watchlist[i-1].timeStamp){
					timeStampSnapshotMap.set(String(watchlist[i].timeStamp)+":"+watchlist[i].symbol, watchlist[i])
				} else{
					timeStampSnapshotArr.push(timeStampSnapshotMap)
					break
				}
			} else {
				timeStampSnapshotMap.set(String(watchlist[i].timeStamp)+":"+watchlist[i].symbol, watchlist[i])
			}
		}
		// for (const k of timeStampMap.keys()){
		// 	console.log(k)
		// }
		// for (let v of timeStampMap.values()){
		// 	console.log(v)
		// }
		// for (let [k,v] of timeStampMap.entries()){
		// 	console.log(k,v)
		// }
		// for (let e of timeStampMap.entries()){
		// 	console.log(e)
		// }

		let data = [...timeStampSnapshotArr.values()];
		console.log(data)

		console.log(timeStampSnapshotMap.size)
		// console.log(timeStampSnapshotMap.values())
		return timeStampSnapshotMap;
	}

	makeTimeStampMap(watchlist){
		// console.log(watchlist)
		// console.log(watchlist.length)
		var timeStampMap = new Map();
		
		for (let i in watchlist){
			// process.stdout.write(i);
			timeStampMap.set(String(watchlist[i].timeStamp)+":"+watchlist[i].symbol, watchlist[i])
			// console.log(timeStampMap.get(watchlist[i].timeStamp, watchlist[i].lastPrice))
		}
		// for (const k of timeStampMap.keys()){
		// 	console.log(k)
		// }
		// for (let v of timeStampMap.values()){
		// 	console.log(v)
		// }
		// for (let [k,v] of timeStampMap.entries()){
		// 	console.log(k,v)
		// }
		// for (let e of timeStampMap.entries()){
		// 	console.log(e)
		// }

		let data = [...timeStampMap.values()];
		console.log(data)

		console.log(timeStampMap.size)
		// console.log(timeStampMap.values())
		return timeStampMap;
	}
	
}

export default new Data();