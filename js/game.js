
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
  this.board = [];
  integerArray = position.split(' ').map(function(elem) {return parseInt(elem, 10);});
  for (var i = 0; i < integerArray.length; i+=4) {
    this.board.push(integerArray.slice(i, i+4));
  }
};

Game.prototype.toString = function() {
  return this.board.map(function(row){
    return row.join(' ') + "\n";
  }).join('');
};


// var game = new Game("0 0 0 1 2 0 0 0 0 2 0 0 0 0 0 4");
// console.log(game.toString());

