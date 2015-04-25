
var Direction = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right"
};

var Game = function(position) {
  this.board = null;

  if (position) {
    this.setupBoard(position);
  }
  else {
    this.createBoard();
    this.spawnNewTiles(2);
  }
};

Game.prototype.move = function(direction) {
  switch(direction) {
    case Direction.UP:
      // rotate -90
    break;
    case Direction.DOWN:
      // rotate 90
    break;
    case Direction.RIGHT:
      // rotate 180
    break;
    case Direction.LEFT:
      var board = this.board;
      this.board.forEach(function(rowArray, index) {
        row = new Row(rowArray);
        board[index] = row.moveLeft();
      });
    break;
    default:
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

Game.prototype.spawnNewTiles = function(num) {
  var randomIndex, newTilesCounter = 0;
  var flatBoard = _.flatten(this.board);

  while (newTilesCounter < num) {
    randomIndex = _.random(0, flatBoard.length-1);
    if (flatBoard[randomIndex] === 0) {
      flatBoard[randomIndex] = this.twoOrFour();
      newTilesCounter++;
    }
  }
  this.board = _.eachSlice(flatBoard, 4);
};

Game.prototype.twoOrFour = function() {
  return (_.random(1, 10) === 1) ? 4 : 2;
};

// var game = new Game("0 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0");
// console.log(game.toString());
// game.move("left");
// console.log(game.toString());

