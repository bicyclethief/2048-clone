
var Controller = function() {
  this.game = new Game();
  console.log(this.game.toString());

  Mousetrap.bind('up', this._moveUp.bind(this));
  Mousetrap.bind('down', this._moveDown.bind(this));
  Mousetrap.bind('right', this._moveRight.bind(this));
  Mousetrap.bind('left', this._moveLeft.bind(this));
};

Controller.prototype._moveUp = function() {
  this.game.move('up');
  console.log(this.game.toString());
};

Controller.prototype._moveDown = function() {
  this.game.move('down');
  console.log(this.game.toString());
};

Controller.prototype._moveRight = function() {
  this.game.move('right');
  console.log(this.game.toString());
};

Controller.prototype._moveLeft = function() {
  this.game.move('left');
  console.log(this.game.toString());
};
