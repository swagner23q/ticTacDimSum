const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//global variables
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//game functions
var startGame = function() {
  rl.question("Would you like to start? (Y/N)", function(answer) {
    if (answer.toUpperCase() === "Y") {
      console.log("Here is the board");
      console.log(board);

    } else {
      console.log('Fine...Bye Felicia (>_>)');
      rl.close();
    }

  });
}
var replaceNumberX = function(userAnswer) {
  if (userAnswer === board[userAnswer]) {
    return board[userAnswer] = "X";
  }
}
var replaceNumberO = function(userAnswer) {
  if (userAnswer === board[userAnswer]) {
    return board[userAnswer] = "O";
  }
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
