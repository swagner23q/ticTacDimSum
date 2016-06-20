#!/usr/bin/env node
 function gameState() {
 this.boardSize = this.filledCells = this.totalCells = 0;
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
  let h = v = dl = dr = 0;
  for (let i = 0; i < this.boardSize; i++) {
    if (this.board[i][col] === value) {
      v++;

    } if (this.board[row][i] === value) {
      h++;

    } if (this.board[i][j] === value) {
        dl++;

    } if (this.board[i][i] === value) {
      dr++;
    }
  } console.log("h = " + h);
    console.log("v = " + v);
    console.log("dl = " + dl);
    console.log("dr = " + dr);

}
// gameState.prototype.gameReset = function() {
//   if (this.userTie) {
//     var game = new gameState;
//   }
// }
module.exports.gameState = gameState;
