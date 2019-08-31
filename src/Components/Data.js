// @ts-nocheck
class Data {

	constructor() {
    this.authenticated = true;
	}

	getTimeStampSets(watchlist){
		var timeStampSet = new Set();
		var snapShotArr = [];
		var snapShotSet = new Set();
    console.log(watchlist)
    for (var i in watchlist){
			timeStampSet.add(watchlist[i].timeStamp)
    }

		console.log(timeStampSet)

		for (var j of timeStampSet){
			for (var k in watchlist){
				if(j === watchlist[k].timeStamp){
					// for(var l in snapShotArr){
					// 	console.log(l)
					// 	if(l.indexOf(watchlist[k].timeStamp) === -1){
					// 		snapShotArr.push(watchlist[k])
					// 	}
					// }
					snapShotArr.push(watchlist[k])
				}
			}
			snapShotSet.add(snapShotArr)
			snapShotArr = []
		}
		console.log(snapShotSet)
	}
	


	
}

export default new Data();