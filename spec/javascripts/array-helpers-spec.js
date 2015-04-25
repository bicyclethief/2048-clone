
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

describe('rotate90', function() {
  it('rotate an array 90 degrees clockwise', function() {
    var game = new Game("1 0 0 0 1 0 0 0 1 0 0 0 1 0 0 0");
    game.board = rotate90(game.board);
    expect(game.toString()).toEqual("1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0");
  });
});