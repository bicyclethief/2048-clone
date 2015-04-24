
describe("Game", function(){
  it("should return a game object", function(){
    var game = new Game();
    expect(game).toBeDefined();
  });

  it('should create an empty board with 2 randomly spawned tiles', function() {
    var game = new Game();
    var flatBoard = gameStringToArray(game.toString());

    var numZeros = flatBoard.reduce(function(sum, num) {
      return (num === 0)? sum + 1 : sum;
    }, 0);

    var isZeroTwoOrFour = flatBoard.every(function(elem) {
      return (elem === 0 || elem === 2 || elem === 4);
    });

    expect(numZeros).toEqual(14);
    expect(isZeroTwoOrFour).toEqual(true);
  });

  it('should setup a board position', function() {
    var game = new Game("0 0 0 1 2 0 0 0 0 2 0 0 0 0 0 4");
    expect(game.toString()).toEqual("0 0 0 1\n2 0 0 0\n0 2 0 0\n0 0 0 4\n");
  });
});

describe('Game#move("left")', function() {

  it('should move no tiles to the left', function() {
    var game = new Game("2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0");
    game.move("left");
    expect(game.toString()).toEqual("2 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0\n");
  });

  it('should move the 2 tile one left', function() {
    var game = new Game("0 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0");
    game.move("left");
    expect(game.toString()).toEqual("2 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0\n");
  });

  it('should move the 2 tile all the way left to the end', function() {
    var game = new Game("0 0 0 2 0 0 0 0 0 0 0 0 0 0 0 0");
    game.move("left");
    expect(game.toString()).toEqual("2 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0\n");
  });
});