
var Controller = function() {
  this.game = new Game();
  this.displayBoard();

  Mousetrap.bind('up', this._moveUp.bind(this));
  Mousetrap.bind('down', this._moveDown.bind(this));
  Mousetrap.bind('right', this._moveRight.bind(this));
  Mousetrap.bind('left', this._moveLeft.bind(this));
};

Controller.prototype.displayBoard = function() {
  $('#game-board').html(this.game.toHTML());
};

Controller.prototype.unbindAll = function() {
  ['up', 'down', 'left', 'right'].forEach(function(key) {
    Mousetrap.unbind(key);
  });
};

function makeCallback(direction) {
  return function() {
    this.game.move(direction);
    this.displayBoard();
    if (this.game.isWon) {
      alert("You won!");
      this.unbindAll();
    }
  };
}

Controller.prototype._moveUp = makeCallback('up');
Controller.prototype._moveDown = makeCallback('down');
Controller.prototype._moveRight = makeCallback('right');
Controller.prototype._moveLeft = makeCallback('left');
