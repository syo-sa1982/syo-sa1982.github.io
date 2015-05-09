/**
 * Created by fujiiyousuke on 15/05/05.
 */
function AppView(el) {
	this.initialize(el);
	this.handleEvents();
}

AppView.prototype.initialize = function(el) {
	this.$el = el;
	this.$list = this.$el.next().children();
//	this.$el = $el;

	var obj = this.$el.data();
//	var obj = this.$el.dataset;
	if (this.$el.prop("required")) {
		obj["required"] = "";
	}

	this.model = new AppModel(obj);
};

AppView.prototype.handleEvents = function() {
	var self = this;

	this.$el.on("keyup",function(e) {
		self.onKeyup(e);
	});
	this.model.on("valid",function() {
		self.onValid();
	});
	this.model.on("invalid",function() {
		self.onInvalid();
	});
};

AppView.prototype.onKeyup = function(e) {
	var  $target = $(e.currentTarget);
	this.model.set($target.val());
};

AppView.prototype.onValid = function() {
	this.$el.removeClass("error");
	this.$list.hide();
};
AppView.prototype.onInvalid = function() {
	var self = this;
	this.$el.addClass("error");
	this.$list.hide();

	$.each(this.model.errors, function(index, val) {
		self.$list.filter("[data-error=\"" + val + "\"]").show();
	});
};


$("input").each(function() {
	new AppView(this);
});