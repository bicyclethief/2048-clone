
describe("Game", function(){
  it("should return a game object", function(){
    var game = new Game();
    expect(game).toBeDefined();
  });

  it('should create an empty board', function() {
    var game = new Game();
    expect(game.toString()).toEqual("0 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0\n");
  });

  it('should setup a board position', function() {
    var game = new Game("0 0 0 1 2 0 0 0 0 2 0 0 0 0 0 4");
    expect(game.toString()).toEqual("0 0 0 1\n2 0 0 0\n0 2 0 0\n0 0 0 4\n");
  });
});