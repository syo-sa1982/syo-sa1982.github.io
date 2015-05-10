/**
 * Created by yosuke.fujii on 2015/05/07.
 */
function DeckApp (el){
	this.view = new DeckView(el);
	this.url = 'https://ddragon.leagueoflegends.com/cdn/5.2.1/data/en_US/champion.json';

	var self = this;

	this.fetch(self.url).then(function(fetchData) {

		self.data = fetchData.data;
//		self.sendView(self);
		self.view.render(self.data);
	}, function(e) {
		console.error("取得失敗");
	});
}

DeckApp.prototype.fetch = function (url){
	return $.ajax({
		url: url,
		dataType: "json"
	});
};

DeckApp.prototype.sendView = function (self,sendedData){

	console.log(typeof data);
	var dataLength = self.data.length,
		resultData = {},
		cnt = 0;
	for(var i in self.data){
		if (self.loadNum <= cnt){break;}
		console.log(i);

		resultData[i] = self.data[i];
		cnt++;
	}

	console.log(typeof resultData);
	console.log(resultData.length);

	self.view.render(resultData);
};


DeckApp.prototype.isEmpty = function(value) {
	return value === "";
};
