import $ from 'jquery';

class Data{
	
    constructor() {
    // super()
    this.state = {
        watchlist: [],
        timeStamp: null,
        isLoading: false
        }
    }

    findAllStocks(){
        $.ajax({
            url: 'http://localhost:8081/rest/api/findAllStocks/',
            dataType:'json',
            cache: false,
            success: function(data){
                this.watchlist = data;
                this.isLoading = false;
                // this.setState({
                //     watchlist: data,
                //     isLoading: false
                // });
                console.log("getData() returns ", data);
                console.log("this.state.watchlist.length == ", this.state.watchlist.length)
            }.bind(this),
            error: function(xhr, status, err){
                console.log("err " + err);
                console.log("status " + status);
                console.log("xhr.response " + xhr.responseText);
            }
        });

        let timeStampH
        for (let i = 0; i < this.state.watchlist.length; i++){
            // console.log(this.state.watchlist[i]['timeStamp'])
            timeStampH = this.state.watchlist[i]['timeStamp']
        }
        console.log(timeStampH)

    }
}

export default new Data();