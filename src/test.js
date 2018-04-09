var expect = require('chai').expect;
var Game = require('./index');

describe('Tennis Game', function() {
  describe('Score', function() {
    it('should display the score', function() {
      const expected = [0,0];
      const game = new Game();
      expect(game.score).to.deep.equal(expected);
    });
    it('should add 15 points to the winner', function() {
      const expected = [15,0];
      const game = new Game();
      game.winsPoint(0);
      expect(game.score).to.deep.equal(expected);
    })
  });
});