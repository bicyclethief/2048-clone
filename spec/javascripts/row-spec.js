
describe('Row', function() {
  it('should remove zeros from an Array', function() {
    var row = new Row([0, 2, 0, 4, 1, 3, 0, 0, 5]);
    expect(row.removeZeros()).toEqual([2, 4, 1, 3, 5]);
  });
});