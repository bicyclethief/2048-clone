
var Cell = function(value) {
  this.value = value || 0;
  this.hasDoubled = false;
};

Cell.prototype.equal = function(cell) {
  return (this.value == cell.value);
};

Cell.prototype.doubleCell = function() {
  this.value *= 2;
};

Cell.prototype.emptyCell = function() {
  this.value = 0;
};

Cell.prototype.setDoubled = function() {
  hasDoubled = true;
};

var Row = function(row) {
  this.row = row;
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

// var row = new Row([2, 2, 0, 0]);
// console.log(row.moveLeft());


