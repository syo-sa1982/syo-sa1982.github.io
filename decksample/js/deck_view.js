/**
 * Created by yosuke.fujii on 2015/05/07.
 */
function DeckView(el) {

	this.initialize(el);
	this.handleEvents();
}

DeckView.prototype.initialize = function(el) {
	this.template = _.template($('[data-template="item"]').html());
	this.imgUrl = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/';
	this.el = el;
};

DeckView.prototype.handleEvents = function() {
	var self = this;


};

DeckView.prototype.onScroll = function(e) {
};

DeckView.prototype.render = function(data) {
	console.log(data);
	var html = this.template({
		list: data
	});
	$(this.el).html(html);
};
