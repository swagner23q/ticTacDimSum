const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//global variables
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var lines = "   -----------";
var space = "                       ";

//game functions
var startGame = function() {
  rl.question("ヽ(｀０´）ノ <<Let's start! (Y/N)", function(answer) {
    if (answer.toUpperCase() === "Y") {
      console.log("☆☆Battle Board☆☆");
      console.log(space);
      console.log("  | " + board[0] + " | " + board[1] + " | " + board[2] + " |");
      console.log(lines);
      console.log("  | " + board[3] + " | " + board[4] + " | " + board[5] + " |");
      console.log(lines);
      console.log("  | " + board[6] + " | " + board[7] + " | " + board[8] + " |");
      console.log(space);
      playerTurnX();

    } else {
      console.log('Fine...Bye Felicia (￣-￣)');
      rl.close();
    }
  });
}

var playerTurnX = function() {
  rl.question("Player X's move, choose a position (0-8)", function(answer) {
    if (parseInt(answer) !== 0 && parseInt(answer) !== 1 && parseInt(answer) !== 2 && parseInt(answer) !== 3 && parseInt(answer) !== 4 && parseInt(answer) !== 5 && parseInt(answer) !== 6 && parseInt(answer) !== 7 && parseInt(answer) !== 8) {
      console.log("(*￣o￣*)> WARNING--Not a valid position, try again");
      playerTurnX();
    } else {
    replaceNumberX(parseInt(answer));
    console.log(space);
    console.log("  | " + board[0] + " | " + board[1] + " | " + board[2] + " |");
    console.log(lines);
    console.log("  | " + board[3] + " | " + board[4] + " | " + board[5] + " |");
    console.log(lines);
    console.log("  | " + board[6] + " | " + board[7] + " | " + board[8] + " |");
    console.log(space);
    checkWinX(board);
    checkWinO(board);
    playerTurnO();
    }
  });
}
var playerTurnO = function() {
  rl.question("Player O's move, choose a position (0-8)", function(answer) {
    if (parseInt(answer) !== 0 && parseInt(answer) !== 1 && parseInt(answer) !== 2 && parseInt(answer) !== 3 && parseInt(answer) !== 4 && parseInt(answer) !== 5 && parseInt(answer) !== 6 && parseInt(answer) !== 7 && parseInt(answer) !== 8) {
      console.log("(*￣o￣*)> WARNING--Not a valid position, try again");
      playerTurnO();
    } else {
    replaceNumberO(parseInt(answer));
    console.log(space);
    console.log("  | " + board[0] + " | " + board[1] + " | " + board[2] + " |");
    console.log(lines);
    console.log("  | " + board[3] + " | " + board[4] + " | " + board[5] + " |");
    console.log(lines);
    console.log("  | " + board[6] + " | " + board[7] + " | " + board[8] + " |");
    console.log(space);
    checkWinX(board);
    checkWinO(board);
    playerTurnX();

    };
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
    console.log("ヽ（￣∇￣）ノ ﾗﾝﾗﾝ♪~*~*~Player X has won!~*~*~");
    endGame();
  }
}

var checkWinO = function(board) {
  var stringBoardO = board.toString();
  if (stringBoardO === "O,O,O,X,4,X,X,7,8" ||  stringBoardO === "X,X,2,O,O,O,6,7,8") {
    console.log("ヽ（￣∇￣）ノ ﾗﾝﾗﾝ♪ ~*~*~Player O has won!~*~*~");
    endGame();
  }
}

var endGame = function() {
  rl.question("Game over, play again? (Y/N)", function(answer) {
    if (answer.toUpperCase() === "Y") {
      board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      startGame();
    } else {
      console.log("K, bye! (o￣∇￣)o")
      rl.close();
    }
  });
}
// var checkDoubleX = function(answer) {
//   if (board[answer] = "O" {
//     console.log("(*￣o￣*)> WARNING--Spot taken, try again");
//   }
// }
// var checkInputO = function(answer) {
//   if (parseInt(answer) !== 0 && parseInt(answer) !== 1 && parseInt(answer) !== 2 && parseInt(answer) !== 3 && parseInt(answer) !== 4 && parseInt(answer) !== 5 && parseInt(answer) !== 6 && parseInt(answer) !== 7 && parseInt(answer) !== 8) {
//     console.log("(*￣o￣*)> WARNING--Not a valid position or spot taken, try again");
//   }
// }

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
