
var Cell = function(value) {
  this.value = value || 0;
  this.hasDoubled = false;
};

var Row = function(row) {
  this.row = row;
};

Row.prototype.moveLeft = function() {
  var leftOvers = this.row.removeZeros();
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


