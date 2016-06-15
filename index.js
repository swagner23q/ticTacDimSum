const readline = require('readline');
var player = require('play-sound')(opts = {});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//global variables
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var lines = "   -----------";
var lines2 = "-----------------------------------------------------------------------------";
var space = "                       ";
var playerX;
var playerO;
var turns = 0;
var playerXScore = 0;
var playerOScore = 0;
var ties = 0;

//game functions in order
function playerXName(answer) {
  rl.question("Enter Player X's Name: ", function(answer) {
    playerX = answer;
    console.log("Player X is " + playerX);
    playerOName();
  });
}

function playerOName(answer) {
  rl.question("Enter Player O's Name: ", function(answer) {
    playerO = answer;
    console.log("Player O is " + playerO);
    startGame();
  });
}

function startGame() {
  rl.question("ヽ(｀０´）ノ <<Let's start! (Y/N)", function(answer) {
    if (answer.toUpperCase() === "Y") {
      player.play('sounds/pacman.mp3', function(err){});
      console.log(lines2);
      console.log("Current Score-- " + playerX + " Wins: " + playerXScore + " | " + playerO + " Wins: " + playerOScore + " | " + "Ties: " + ties);
      console.log(lines2);
      console.log("☆☆Battle Board☆☆");
      console.log(space);
      console.log("  | " + board[0] + " | " + board[1] + " | " + board[2] + " |");
      console.log(lines);
      console.log("  | " + board[3] + " | " + board[4] + " | " + board[5] + " |");
      console.log(lines);
      console.log("  | " + board[6] + " | " + board[7] + " | " + board[8] + " |");
      console.log(space);
      if (Math.random() * 6 <= 3) {
        playerTurnX();
      } else {
        playerTurnO();
      }
    } else if (answer.toUpperCase() ==="N") {
        player.play('sounds/sad.mp3', function(err){});
        console.log("Fine...Bye Felicia (￣-￣)")
        rl.close();
    } else {
        console.log("We'll just assume you don't want to...so, Bye Felicia (￣-￣)");
        rl.close();
    }
  });
}

function playerTurnX() {
  rl.question(playerX + "'s move, choose a position (0-8): ", function(answer) {
    if (parseInt(answer) !== 0 && parseInt(answer) !== 1 && parseInt(answer) !== 2 && parseInt(answer) !== 3 && parseInt(answer) !== 4 && parseInt(answer) !== 5 && parseInt(answer) !== 6 && parseInt(answer) !== 7 && parseInt(answer) !== 8) {
      player.play('sounds/error.mp3', function(err){});
      console.log("(*￣o￣*)> WARNING--Not a valid position, try again");
      playerTurnX();
    } else if (board[answer] === "O" || board[answer] === "X") {
        player.play('sounds/error.mp3', function(err){});
        console.log("(*￣o￣*)> WARNING--Spot taken, try again");
        playerTurnX();
    } else {
        replaceNumberX(parseInt(answer));
        player.play('sounds/woosh.mp3', function(err){});
        console.log(space);
        console.log("  | " + board[0] + " | " + board[1] + " | " + board[2] + " |");
        console.log(lines);
        console.log("  | " + board[3] + " | " + board[4] + " | " + board[5] + " |");
        console.log(lines);
        console.log("  | " + board[6] + " | " + board[7] + " | " + board[8] + " |");
        console.log(space);
        checkWin(board);
        turns = turns + 1;
        playerTurnO();
      }
  });
}
function playerTurnO() {
  rl.question(playerO + "'s move, choose a position (0-8): ", function(answer) {
    if (parseInt(answer) !== 0 && parseInt(answer) !== 1 && parseInt(answer) !== 2 && parseInt(answer) !== 3 && parseInt(answer) !== 4 && parseInt(answer) !== 5 && parseInt(answer) !== 6 && parseInt(answer) !== 7 && parseInt(answer) !== 8) {
      player.play('sounds/error.mp3', function(err){});
      console.log("(*￣o￣*)> WARNING--Not a valid position, try again");
      playerTurnO();
    } else if (board[answer] === "O" || board[answer] === "X") {
        player.play('sounds/error.mp3', function(err){});
        console.log("(*￣o￣*)> WARNING--Spot taken, try again");
        playerTurnO();
      } else {
        replaceNumberO(parseInt(answer));
        player.play('sounds/blop.mp3', function(err){});
        console.log(space);
        console.log("  | " + board[0] + " | " + board[1] + " | " + board[2] + " |");
        console.log(lines);
        console.log("  | " + board[3] + " | " + board[4] + " | " + board[5] + " |");
        console.log(lines);
        console.log("  | " + board[6] + " | " + board[7] + " | " + board[8] + " |");
        console.log(space);
        checkWin(board);
        turns = turns + 1;
        playerTurnX();
      };
  });
}

function replaceNumberX(answer) {
  if (answer === board[answer]) {
    return board[answer] = "X";
  }
}
function replaceNumberO(answer) {
  if (answer === board[answer]) {
    return board[answer] = "O";
  }
}

function checkWin(board) {
  if (board[0] === "X" && board[4] === "X" && board[8] === "X" || board[0] === "X" && board[3] === "X" && board[6] === "X" || board[0] === "X" && board[1] === "X" && board[2] === "X" || board[2] === "X" && board[4] === "X" && board[6] === "X" || board[2] === "X" && board[5] === "X" && board[8] === "X" || board[1] === "X" && board[4] === "X" && board[7] === "X" || board[3] === "X" && board[4] === "X" && board[5] === "X" || board[6] === "X" && board[7] === "X" && board[8] === "X") {
    player.play('sounds/tada.mp3', function(err){});
    console.log("ヽ（￣∇￣）ノ  ~*~*~" + playerX + " has won!~*~*~");
    console.log("               ─────────▄──────────────▄");
    console.log("               ────────▌▒█───────────▄▀▒▌")
    console.log("               ────────▌▒▒▀▄───────▄▀▒▒▒▐");
    console.log("               ───────▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐");
    console.log("               ─────▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐");
    console.log("               ───▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀██▀▒▌");
    console.log("               ──▐▒▒▒▄▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▒▌");
    console.log("               ──▌▒▒▐▄█▀▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐");
    console.log("               ─▐▒▒▒▒▒▒▒▒▒▒▒▌██▀▒▒▒▒▒▒▒▒▀▄▌");
    console.log("               ─▌▒▀▄██▄▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌");
    console.log("               ─▌▀▐▄█▄█▌▄▒▀▒▒▒▒▒▒░░░░░░▒▒▒▐");
    console.log("               ▐▒▀▐▀▐▀▒▒▄▄▒▄▒▒▒▒▒░░░░░░▒▒▒▒▌");
    console.log("               ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒░░░░░░▒▒▒▐");
    console.log("               ─▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌");
    console.log("               ─▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐");
    console.log("               ──▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▌");
    console.log("               ────▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀");
    console.log("               ───▐▀▒▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀");
    console.log("               ──▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▀");
    console.log("                ───wow such tic tac toe───");
    playerXScore = playerXScore + 1;
    endGame();
  } else if (board[0] === "O" && board[4] === "O" && board[8] === "O" || board[0] === "O" && board[3] === "O" && board[6] === "O" || board[0] === "O" && board[1] === "O" && board[2] === "O" || board[2] === "O" && board[4] === "O" && board[6] === "O" || board[2] === "O" && board[5] === "O" && board[8] === "O" || board[1] === "O" && board[4] === "O" && board[7] === "O" || board[3] === "O" && board[4] === "O" && board[5] === "O" || board[6] === "O" && board[7] === "O" && board[8] === "O") {
    player.play('sounds/tada.mp3', function(err){});
    console.log("ヽ（￣∇￣）ノ  ~*~*~" + playerO + " has won!~*~*~");
    console.log("               ─────────▄──────────────▄");
    console.log("               ────────▌▒█───────────▄▀▒▌")
    console.log("               ────────▌▒▒▀▄───────▄▀▒▒▒▐");
    console.log("               ───────▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐");
    console.log("               ─────▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐");
    console.log("               ───▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀██▀▒▌");
    console.log("               ──▐▒▒▒▄▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▒▌");
    console.log("               ──▌▒▒▐▄█▀▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐");
    console.log("               ─▐▒▒▒▒▒▒▒▒▒▒▒▌██▀▒▒▒▒▒▒▒▒▀▄▌");
    console.log("               ─▌▒▀▄██▄▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌");
    console.log("               ─▌▀▐▄█▄█▌▄▒▀▒▒▒▒▒▒░░░░░░▒▒▒▐");
    console.log("               ▐▒▀▐▀▐▀▒▒▄▄▒▄▒▒▒▒▒░░░░░░▒▒▒▒▌");
    console.log("               ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒░░░░░░▒▒▒▐");
    console.log("               ─▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌");
    console.log("               ─▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐");
    console.log("               ──▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▌");
    console.log("               ────▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀");
    console.log("               ───▐▀▒▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀");
    console.log("               ──▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▀");
    console.log("                ───wow such tic tac toe───");
    playerOScore = playerOScore + 1;
    endGame();
  } else if (turns >= 8) {
    player.play('/System/Library/Sounds/Basso.aiff', function(err){});
    console.log("（．＿．）It's a draw");
    ties = ties + 1;
    endGame();
  }
}

function endGame() {
  rl.question("Game over, play again? (Y/N)", function(answer) {
    if (answer.toUpperCase() === "Y") {
      board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      turns = 0;
      startGame();
    } else if (answer.toUpperCase() ==="N") {
      player.play('sounds/sad.mp3', function(err){});
      console.log("K, bye! (o￣∇￣)o")
      rl.close();
    } else {
      console.log("We'll just assume you don't want to...K, bye! (o￣∇￣)o")
      rl.close();
    }
  });
}

//initiate game

console.log("Welcome to Tic Tac Toe");
console.log("((To Quit Application: Ctrl + C))");
playerXName();

//tests
module.exports.board = board;
module.exports.replaceNumberX = replaceNumberX;
module.exports.replaceNumberO = replaceNumberO;
module.exports.playerXName = playerXName;
