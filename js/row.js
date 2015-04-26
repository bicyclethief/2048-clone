
var Row = function(row, game) {
  this.row = row;
  this.game = game;
};

Row.prototype.moveLeft = function() {
  var leftOvers = removeZeros(this.row);
  var cells = leftOvers.map(function(digit) {
    return new Cell(digit);
  });

  for (var i = 1; i < cells.length; i++) {
    previousCell = cells[i-1];
    currentCell = cells[i];
    if (!previousCell.hasDoubled && previousCell.equal(currentCell)) {
      previousCell.doubleCell();
      this.game.addScore(previousCell.value);
      previousCell.setDoubled();
      currentCell.emptyCell();
      currentCell.setDoubled();
    }
  }

  arrayToPad = this.cellsToArray(cells);
  arrayToPad = removeZeros(arrayToPad);

  return padArray(arrayToPad, 4, 0);
};

Row.prototype.cellsToArray = function(cells) {
  return cells.map(function(cell) {
    return cell.value;
  });
};