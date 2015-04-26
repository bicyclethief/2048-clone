
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


