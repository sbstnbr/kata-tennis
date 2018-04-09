var expect = require('chai').expect;
var Game = require('./index');

describe('Tennis Game', function() {
  let game;

  it('should should have a default score set to [0,0]', function() {
    const expected = [0,0];
    game = new Game();
    expect(game.score).to.deep.equal(expected);
  });
  it('should increase the score based on the points list', function() {
    const expected = [15,40];
    game = new Game();
    game.winsPoint(0);
    game.winsPoint(1);
    game.winsPoint(1);
    game.winsPoint(1);
    expect(game.score).to.deep.equal(expected);
  });
  it('should define a winner', () => {
    game = new Game();
    game.winsPoint(0);
    game.winsPoint(0);
    game.winsPoint(0);
    game.winsPoint(0);
    game.winsPoint(0);
    expect(game.winner).to.equal(0);
  });
});