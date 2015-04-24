
var Cell = function(value) {
  this.value = value || 0;
  this.hasDoubled = false;
};

var Row = function(row) {
  this.row = row;
};

Row.prototype.moveLeft = function() {
  var leftOvers = this.removeZeros();
  var cells = leftOvers.map(function(digit) {
    return new Cell(digit);
  });

  arrayToPad = this.cellsToArray(cells);
  return this.padArray(arrayToPad, 4, 0);
};

Row.prototype.removeZeros = function(arrayToTrim) {
  return this.row.filter(function(num) {
    return (num !== 0);
  });
};

Row.prototype.padArray = function(arrayToPad, maxLength, padding) {
  var paddedArray = arrayToPad;
  while (paddedArray.length < maxLength) {
    paddedArray.push(padding);
  }
  return paddedArray;
};

Row.prototype.cellsToArray = function(cells) {
  return cells.map(function(cell) {
    return cell.value;
  });
};


