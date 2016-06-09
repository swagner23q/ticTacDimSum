const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//global variables
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var lines = "-----------";

//game functions
var startGame = function() {
  rl.question("Would you like to start? (Y/N)", function(answer) {
    if (answer.toUpperCase() === "Y") {
      console.log("Here is the board");
      console.log(board.slice(0, 3));
      console.log(lines);
      console.log(board.slice(3, 6));
      console.log(lines);
      console.log(board.slice(6, 9));
      playerTurnX();

    } else {
      console.log('Fine...Bye Felicia (>_>)');
      rl.close();
    }
  });
}

var playerTurnX = function() {
  rl.question("Player X's move, choose a position (0-8)", function(answer) {
    replaceNumberX(parseInt(answer));
    console.log(board.slice(0, 3));
    console.log(lines);
    console.log(board.slice(3, 6));
    console.log(lines);
    console.log(board.slice(6, 9));
    checkWinX(board);
    checkWinO(board);
    playerTurnO();
  });
}
var playerTurnO = function() {
  rl.question("Player O's move, choose a position (0-8)", function(answer) {
    replaceNumberO(parseInt(answer));
    console.log(board.slice(0, 3));
    console.log(lines);
    console.log(board.slice(3, 6));
    console.log(lines);
    console.log(board.slice(6, 9));
    checkWinX(board);
    checkWinO(board);
    playerTurnX();

  });
}

var replaceNumberX = function(answer) {
  if (answer === board[answer]) {
    board[answer] = "X";
  }
}
var replaceNumberO = function(answer) {
  if (answer === board[answer]) {
    board[answer] = "O";
  }
}

var checkWinX = function(board) {
  var stringBoardX = board.toString();
  if (stringBoardX === "X,X,X,O,4,O,6,7,8" ||  stringBoardX === "O,O,2,X,X,X,6,7,8") {
    console.log("~~~~Player X has won!~~~~");
    endGame();
  }
}

var checkWinO = function(board) {
  var stringBoardO = board.toString();
  if (stringBoardO === "O,O,O,X,4,X,X,7,8" ||  stringBoardO === "X,X,2,O,O,O,6,7,8") {
    console.log("~~~~Player O has won!~~~~");
    endGame();
  }
}
var endGame = function() {
  rl.question("Game over, would you like to restart?", function(answer) {
    if (answer.toUpperCase() === "Y") {
      startGame();
    } else {
      rl.close();
    }
  });
}

//initiate game

console.log("Welcome to Tic Tac Toe");
startGame();


// Winning Combos Board array X

// ["X", "X", "X", 3, 4, 5, 6, 7, 8]
// [0, 1, 2, "X", "X", "X", 6, 7, 8]
// [0, 1, 2, 3, 4, 5, "X", "X", "X"]
// ["X", 1, 2, "X", 4, 5, "X", 7, 8]
// [0, "X", 2, 3, "X", 5, 6, "X", 8]
// [0, 1, "X", 3, 4, "X", 6, 7, "X"]
// [0, 1, "X", 3, "X", 5, "X", 7, 8]
// ["X", 1, 2, 3, "X", 5, 6, 7, "X"]


module.exports.board = board;
