
var Controller = function() {
  this.game = new Game();
  console.log(this.game.toString());

  Mousetrap.bind('up', this._moveUp.bind(this));
  Mousetrap.bind('down', this._moveDown.bind(this));
  Mousetrap.bind('right', this._moveRight.bind(this));
  Mousetrap.bind('left', this._moveLeft.bind(this));
};

Controller.prototype.unbindAll = function() {
  ['up', 'down', 'left', 'right'].forEach(function(key) {
    Mousetrap.unbind(key);
  });
};

Controller.prototype._moveUp = function() {
  this.game.move('up');
  console.log(this.game.toString());
  if (this.game.isWon) {
    alert("won!");
    this.unbindAll();
  }
};

Controller.prototype._moveDown = function() {
  this.game.move('down');
  console.log(this.game.toString());
  if (this.game.isWon) {
    alert("won!");
    this.unbindAll();
  }
};

Controller.prototype._moveRight = function() {
  this.game.move('right');
  console.log(this.game.toString());
  if (this.game.isWon) {
    alert("won!");
    this.unbindAll();
  }
};

Controller.prototype._moveLeft = function() {
  this.game.move('left');
  console.log(this.game.toString());
  if (this.game.isWon) {
    alert("won!");
    this.unbindAll();
  }
};
