/**
 * Created by yosuke.fujii on 2015/05/07.
 */
function DeckApp (el){
	var view = new DeckView(el),
		url = 'https://ddragon.leagueoflegends.com/cdn/5.2.1/data/en_US/champion.json',
		self = this;

	this.fetch(url).then(function(data) {
		self.data = data['data'];
		view.render(self.data);
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

