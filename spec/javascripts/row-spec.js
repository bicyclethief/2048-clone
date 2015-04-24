
describe('Row#removeZeros', function() {
  it('should remove zeros from an Array', function() {
    var row = new Row([0, 2, 0, 4, 1, 3, 0, 0, 5]);
    expect(row.removeZeros()).toEqual([2, 4, 1, 3, 5]);
  });
});

describe('Row#padArray', function() {
  it('should pad an Array', function() {
    var row = new Row();
    var arrayToPad = [1, 2, 3, 4];
    expect(row.padArray(arrayToPad, 10, 0)).toEqual([1, 2, 3, 4, 0, 0, 0, 0, 0, 0]);
  });
});