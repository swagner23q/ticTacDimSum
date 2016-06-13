var expect = require('chai').expect;
var index = require('../index.js');

describe('index', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
    });
  });
  describe('board', function () {
    it('should have 0-8 in array', function () {
      expect(index.board).to.deep.eql([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
   });
  describe('replaceNumberX', function () {
    it('should replace answer with an X in board array', function () {
      expect(index.replaceNumberX(4)).to.equal("X");
     });
    });
  describe('replaceNumberO', function () {
    it('should replace answer with an O in board array', function () {
      expect(index.replaceNumberO(1)).to.equal("O");
     });
    });
});
