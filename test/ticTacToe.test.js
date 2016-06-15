var expect = require('chai').expect;
var ticTacToe = require('../ticTacToe.js');
var gameState = ticTacToe.gameState;
var game;

describe('ticTacToe', function() {
  describe('gameBoardExists', function () {
    it('the board will be an array', function () {
      var game = new gameState();
      game.setupBoard();
      expect(game.board).to.be.a('array');
    });
  });
  describe('isValidMove', function() {
    beforeEach(function() {
      game = new gameState();
      game.setupBoard();
    });
    it('the move will not be valid in the row', function() {
      expect(game.isValidMove(7, 1)).to.be.false;
    })
    it('the move will not be valid in the column', function() {
      expect(game.isValidMove(1, 7)).to.be.false;
    });
    it('the move will not be valid in the row and column', function() {
      expect(game.isValidMove(7, 7)).to.be.false;
    });
    it('the move will be valid', function() {
      expect(game.isValidMove(1, 0)).to.be.true;
    });

  });
});
