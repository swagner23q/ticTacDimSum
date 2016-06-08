var assert = require('chai').assert;
var index = require('../index.js');

describe('index', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
    });
  });
  describe('replaceNumber', function () {
    it('should covert array board into a string', function () {
      expect(index.board).to.equal("0, 1, 2, 3, 4, 5, 6");
    });
   });
});
