
describe("Game", function(){
  it("should return a game object", function(){
    var game = new Game();
    expect(game).toBeDefined();
  });

  it('should create an empty board', function() {
    var game = new Game();
    expect(game.toString()).toEqual("0 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0\n");
  });
});