var Ball = {
	_WIDTH: 1200,
	_HEIGHT: 800
};
Ball.Boot = function(game) {};
Ball.Boot.prototype = {
	create: function() {
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.state.start('Preloader');
	}
};