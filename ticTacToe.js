#!/usr/bin/env node
var gameState = function() {
 this.boardSize = 3;
 this.board = [];
 this.filledCells = 0;
 this.totalCells = this.boardSize ^ 2;

 this.setupBoard = function() {
  for (var i = 0; i < this.boardSize; i++) {
    this.board[i] = [];

    for (var j = 0; j < this.boardSize; j++) {
      this.board[i][j] = null;
    }
  }
 }
}

gameState.prototype.isValidMove = function(row, col) {
  if (typeof this.board[row] === 'undefined') {
    return false;
  } else if (typeof this.board[row][col] === 'undefined' ) {
    return false;
  } else if (this.board[row][col] !== null) {
    return false;
  } else {
    return true;
  }
}
module.exports.gameState = gameState;
