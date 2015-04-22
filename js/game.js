
var Game = function(position) {
  this.board = null;

  if (position) {
    this.setupBoard(position);
  }
  else {
    this.createBoard();
  }
};

Game.prototype.createBoard = function() {
  this.board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
};

Game.prototype.setupBoard = function(position) {
};

Game.prototype.toString = function() {
  return this.board.map(function(row){
    return row.join(' ') + "\n";
  }).join('');
};


// var game = new Game();
// console.log(game.toString());

