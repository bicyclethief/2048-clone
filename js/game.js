
var Direction = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right"
};

var Game = function(position) {
  this.board = null;
  this.winTile = 256;
  this.isWon = false;
  this.score = 0;

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
      this.board = rotateCounter90(this.board);
      this.moveLeft();
      this.board = rotate90(this.board);
    break;
    case Direction.DOWN:
      // rotate 90
      this.board = rotate90(this.board);
      this.moveLeft();
      this.board = rotateCounter90(this.board);
    break;
    case Direction.RIGHT:
      // rotate 180
      this.board = rotate180(this.board);
      this.moveLeft();
      this.board = rotate180(this.board);
    break;
    case Direction.LEFT:
      this.moveLeft();
    break;
    default:
  }

  this.checkWin();

  if (!this.isWon) {
    this.spawnNewTiles(1);
  }
};

Game.prototype.moveLeft = function() {
  var game = this;
  this.board.forEach(function(rowArray, index) {
    row = new Row(rowArray, game);
    game.board[index] = row.moveLeft();
  });
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

Game.prototype.checkWin = function() {
  var flatBoard = _.flatten(this.board);
  if (_.indexOf(flatBoard, this.winTile) !== -1) {
    this.isWon = true;
  }
};

Game.prototype.addScore = function(points) {
  this.score += points;
};

Game.prototype.toString = function() {
  return this.board.map(function(row){
    return row.join(' ') + "\n";
  }).join('');
};

Game.prototype.toHTML = function() {
  var boardInside = this.board.map(function(row) {
    var rowInside = row.map(function(cell) {
      var tileClass, tileValue;
      if (cell === 0) {
        tileClass = "tile-empty";
        tileValue = "";
      }
      else {
        tileClass = "tile-numbered";
        tileValue = cell;
      }
      return "<div class='col-md-3 tile " + tileClass + "'>" + tileValue + "</div>";
    }).join('\n');
    return "<div class='row text-center'>" + rowInside + "</div>";
  }).join('');

  return "<div class='row text-center'><div class='col-md-12'><div class='game-score'>Score: " + this.score + "</div></div>" + boardInside;
};