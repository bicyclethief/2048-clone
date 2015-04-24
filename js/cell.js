
var Cell = function(value) {
  this.value = value || 0;
  this.hasDoubled = false;
};

var Row = function(row) {
  this.row = row;
};

Row.prototype.moveLeft = function() {
  var leftOvers = this.removeZeros();
};

Row.prototype.removeZeros = function() {
  return this.row.filter(function(num) {
    return (num !== 0);
  });
};


