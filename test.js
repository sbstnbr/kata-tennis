var expect = require('chai').expect;
var score = require('./index');

describe('Tennis Game', function() {
  describe('Score', function() {
    it('should display the score', function() {
      const expected = [0,0];
      const result = score();
      expect(result).to.deep.equal(expected);
    });
  });
});