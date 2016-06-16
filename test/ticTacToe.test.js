var expect = require('chai').expect;
var ticTacToe = require('../ticTacToe.js');
var gameState = ticTacToe.gameState;
var game;

describe('ticTacToe', function() {
  describe('setupBoard', function () {
    beforeEach(function() {
      var boardSize = 3;
      game = new gameState();
      game.setupBoard(boardSize);
    });

    it('the board will be an array', function () {
      expect(game.board).to.be.a('array');
    });

    it('the current filledCells will be 0', function() {
      expect(game.filledCells).to.equal(0);
    });

    it('the board size will be 3', function() {
      expect(game.boardSize).to.equal(3);
    });

    it('the totalCells within the board will be 9', function() {
      expect(game.totalCells).to.equal(9);
    });

    it('non numbers not valid for board setup', function() {
      expect(function() {
        game.setupBoard('q')
      }).to.throw(Error);
    });
  });

  describe('isValidMove', function() {
    beforeEach(function() {
      game = new gameState();
      game.setupBoard(3);
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
  describe('setMove', function() {
    beforeEach(function() {
      game = new gameState();
      game.setupBoard(3);
      game.setMove(0,0,'X');
    });
    it('will set given row and column to value', function() {
      expect(game.board[0][0]).to.equal('X');
    });
    it('will add one to filledCells count', function() {
      expect(game.filledCells).to.equal(1);
    });
  });
  describe('userTie', function() {
    beforeEach(function() {
      game = new gameState();
      game.setupBoard(3);
      game.setMove(0,0,'X');
      game.setMove(0,1,'X');
      game.setMove(0,2,'X');
      game.setMove(1,0,'X');
      game.setMove(1,1,'X');
      game.setMove(1,2,'X');
      game.setMove(2,0,'X');
      game.setMove(2,1,'X');
      game.setMove(2,2,'X');
    });
    it('will return true if filled cells match total cells', function() {
      expect(game.filledCells).to.equal(game.totalCells);
    });
  });
});
