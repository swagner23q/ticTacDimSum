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
      console.log(board.slice(3, 6));
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
    console.log(board.slice(3, 6));
    console.log(board.slice(6, 9));
    playerTurnO();
  });
}
var playerTurnO = function() {
  rl.question("Player O's move, choose a position (0-8)", function(answer) {
    replaceNumberO(parseInt(answer));
    console.log(board.slice(0, 3));
    console.log(board.slice(3, 6));
    console.log(board.slice(6, 9));
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

var checkWinX = function(answer) {

  
}

//initiate game

console.log("Welcome to Tic Tac Toe");
startGame();


// var startGame = function() {
//   rl.question('Are you ready? (Y/N)', function(answer) {
//     var firstRow = ("      1|2|3");
//     var lineRow = ("      -----");
//     var secondRow = ("      4|5|6");
//     var thirdRow = ("      7|8|9");
//
//     if (answer.toUpperCase() === "Y") {
//
//       console.log("Here is the board");
//       console.log(firstRow);
//       console.log(lineRow);
//       console.log(secondRow);
//       console.log(lineRow);
//       console.log(thirdRow);
//
//     } else {
//       console.log('Fine...Bye Felicia (>_>)');
//       rl.close();
//     }
//
//   });
// }
// startGame();
