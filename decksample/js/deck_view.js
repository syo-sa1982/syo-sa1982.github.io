/**
 * Created by yosuke.fujii on 2015/05/07.
 */
function DeckView(el) {

	this.initialize(el);
}

DeckView.prototype.initialize = function(el) {
	this.loadNum = 20;
	this.template = _.template($('[data-template="item"]').html());
	this.imgUrl = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/';
	this.asc = false; // 昇順(true)/降順(false)
	this.nowSortKey = ""; // 現在ソートキー
	this.initSortKey = "Total"; // 初期ソートキー

	this.el = el;
	this.$moreBtn = $("#more-btn");
	this.handleEvents();
};

DeckView.prototype.handleEvents = function() {
	var self = this;

	this.$moreBtn.on("click", function(e){
		self.loadNum += 8;
		self.render(self.data);
	});

};

DeckView.prototype.onScroll = function(e) {
};

DeckView.prototype.render = function(data) {
	this.data = data;
	console.log(data);
	var html = this.template({
		list: this.dataFormat(data)
	});
	$(this.el).html(html);
};


DeckView.prototype.dataFormat = function (data,sendedData){

	var self = this,
		dataLength = data.length,
		resultData = {},
		cnt = 0;

	for(var i in data){
		if (self.loadNum <= cnt){break;}
		console.log(i);

		resultData[i] = data[i];
		cnt++;
	}
	return resultData;
};