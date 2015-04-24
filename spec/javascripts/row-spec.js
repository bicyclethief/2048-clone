

describe('Row#moveLeft', function() {
  it('should return same row when only non-zero digit is already furthest left', function() {
    var row = new Row([2, 0, 0, 0]);
    expect(row.moveLeft()).toEqual([2, 0, 0, 0]);
  });

  it('should return the second leftist non-zero digit shifted left', function() {
    var row = new Row([0, 2, 0, 0]);
    expect(row.moveLeft()).toEqual([2, 0, 0, 0]);
  });

  it('should return the third leftist non-zero digit shifted left', function() {
    var row = new Row([0, 0, 2, 0]);
    expect(row.moveLeft()).toEqual([2, 0, 0, 0]);
  });

  it('should return the rightest non-zero digit shifted left', function() {
    var row = new Row([0, 0, 0, 2]);
    expect(row.moveLeft()).toEqual([2, 0, 0, 0]);
  });

  it('should handle a simple collision case', function() {
    var row = new Row([2, 2, 0, 0]);
    expect(row.moveLeft()).toEqual([4, 0, 0, 0]);
  });


  it('should handle a collision case when both tiles are not at the end', function() {
    var row = new Row([0, 0, 2, 2]);
    expect(row.moveLeft()).toEqual([4, 0, 0, 0]);
  });

  it('should handle a long distance collision', function() {
    var row = new Row([2, 0, 0, 2]);
    expect(row.moveLeft()).toEqual([4, 0, 0, 0]);
  });

  it('should double a tile only once', function() {
    var row = new Row([2, 2, 2, 0]);
    expect(row.moveLeft()).toEqual([4, 2, 0, 0]);
  });
});