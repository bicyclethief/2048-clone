
describe("Game", function(){
  it("should return a game object", function(){
    var game = new Game();
    expect(game).toBeDefined();
  });

  it('should create an empty board with 2 randomly spawned tiles', function() {
    var game = new Game();
    var flatBoard = game.toString().trim().replace(/\n/g, ' ').split(' ').map(function(elem) {return parseInt(elem, 10);});

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