
describe('removeZeros', function() {
  it('should remove zeros from an Array', function() {
    expect(removeZeros(row.row)).toEqual([2, 4, 1, 3, 5]);
  });
});

describe('padArray', function() {
  it('should pad an Array', function() {
    var arrayToPad = [1, 2, 3, 4];
    expect(padArray(arrayToPad, 10, 0)).toEqual([1, 2, 3, 4, 0, 0, 0, 0, 0, 0]);
  });
});