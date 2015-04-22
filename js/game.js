
var Game = function(position) {
  this.board = null;

  if (position) {
    this.createBoard();
  }
  else {
    this.setupBoard(position);
  }
};

Game.prototype.createBoard = function() {
  this.board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
};

Game.prototype.setupBoard = function(position) {
};