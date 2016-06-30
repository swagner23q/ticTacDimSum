'use strict';

 var gameState = function gameState() {
 this.boardSize = 0;
 this.filledCells = 0;
 this.totalCells = 0;
 this.board = [];
}

gameState.prototype.setupBoard = function(boardSize) {
  if (typeof boardSize === 'number') {
    this.boardSize = boardSize;
    this.totalCells = Math.pow(this.boardSize, 2);
    for (var i = 0; i < this.boardSize; i++) {
      this.board[i] = [];

      for (var j = 0; j < this.boardSize; j++) {
        this.board[i][j] = null;
      }
    }
  } else {
    throw new Error("Not a valid board size");
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

gameState.prototype.setMove = function(row, col, value) {
  if (this.isValidMove(row, col)) {
    this.board[row][col] = value;
    this.filledCells++;
    this.chkTie();
  }
}

gameState.prototype.chkTie = function() {
 if (this.filledCells === this.totalCells) {
   return true;
 }
}

gameState.prototype.chkWin = function(row, col, value) {
  let h = 0;
  let v = 0;
  let dl = 0;
  let dr = 0;

  for (let i = 0; i < this.boardSize; i++) {

    //check vertical positions in arrays
    if (this.board[i][col] === value) v++;

    //check horizonatal positions in arrays
    if (this.board[row][i] === value) h++;

    //check leftwards diagonal position in arrays
    if (this.board[i][(this.boardSize - 1) - i] === value) dl++;

    //check rightwards diagonal position in arrays
    if (this.board[i][i] === value) dr++;
  }

  return (h == this.boardSize || v == this.boardSize || dl == this.boardSize || dr == this.boardSize);
}


module.exports.gameState = gameState;
