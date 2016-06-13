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
function startGame() {
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
    } else if (answer.toUpperCase() ==="N") {
      console.log("Fine...Bye Felicia (￣-￣)")
      rl.close();
    } else {
      console.log("We'll just assume you don't want to...so, Bye Felicia (￣-￣)");
      rl.close();
    }
  });
}
function playerXName(answer) {
  rl.question("Enter Player X's Name", function(answer) {
    var playerX = answer;
    return playerX;
    if (answer = answer) {
      playerOName();
    }
  });

}
function playerOName(answer) {
  rl.question("Enter Player O's Name", function(answer) {
    var playerO = answer;
    return playerO;
    if (answer = answer) {
      startGame();
    }
  });
}

function playerTurnX() {
  rl.question("Player X's move, choose a position (0-8)", function(answer) {
    if (parseInt(answer) !== 0 && parseInt(answer) !== 1 && parseInt(answer) !== 2 && parseInt(answer) !== 3 && parseInt(answer) !== 4 && parseInt(answer) !== 5 && parseInt(answer) !== 6 && parseInt(answer) !== 7 && parseInt(answer) !== 8) {
      console.log("(*￣o￣*)> WARNING--Not a valid position, try again");
      playerTurnX();
    } else if (board[answer] === "O" || board[answer] === "X") {
        console.log("(*￣o￣*)> WARNING--Spot taken, try again");
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
        checkTie(board);
        playerTurnO();
    }
  });
}
function playerTurnO() {
  rl.question("Player O's move, choose a position (0-8)", function(answer) {
    if (parseInt(answer) !== 0 && parseInt(answer) !== 1 && parseInt(answer) !== 2 && parseInt(answer) !== 3 && parseInt(answer) !== 4 && parseInt(answer) !== 5 && parseInt(answer) !== 6 && parseInt(answer) !== 7 && parseInt(answer) !== 8) {
      console.log("(*￣o￣*)> WARNING--Not a valid position, try again");
      playerTurnO();
    } else if (board[answer] === "O" || board[answer] === "X") {
        console.log("(*￣o￣*)> WARNING--Spot taken, try again");
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
        checkTie(board);
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

function checkWinX(board) {
  var stringBoardX = board.toString();
  if (stringBoardX === "X,X,X,O,4,O,6,7,8" ||  stringBoardX === "O,O,2,X,X,X,6,7,8" || stringBoardX === "X,X,X,X,O,5,0,0,8" || stringBoardX === "X,X,O,4,X,5,O,O,X" || stringBoardX === "X,X,O,4,X,5,0,0,X" || stringBoardX === "0,1,O,O,4,5,X,X,X" || stringBoardX === "0,O,2,X,X,X,6,O,8" || stringBoardX === "0,O,X,O,X,5,X,7,8" || stringBoardX === "0,1,X,O,X,5,X,O,8" || stringBoardX === "X,O,2,X,O,5,X,7,8" || stringBoardX === "O,1,X,3,O,X,6,7,X" || stringBoardX === "0,O,X,O,4,X,6,7,X" || stringBoardX === "0,1,X,3,O,X,6,O,X" || stringBoardX === "0,1,X,O,4,X,6,O,X" || stringBoardX === "0,1,X,O,4,X,6,O,X" || stringBoardX === "X,1,2,O,X,5,6,O,X" || stringBoardX === "X,O,O,3,X,5,6,7,X" || stringBoardX === "X,1,O,3,X,5,0,7,X" || stringBoardX === "X,1,O,3,X,O,6,7,X" || stringBoardX === "X,1,2,3,X,5,O,O,X" || stringBoardX === "X,0,2,3,X,5,6,O,X" || stringBoardX === "X,1,2,O,X,5,6,O,X" || stringBoardX === "X,1,O,O,X,5,6,O,X" || stringBoardX === "X,O,2,3,X,5,O,7,X" || stringBoardX === "X,1,O,3,X,5,O,7,X" || stringBoardX === "O,1,X,X,X,O,X,O,8" || stringBoardX === "X,X,O,3,X,5,O,O,X") {
    console.log("ヽ（￣∇￣）ノ ﾗﾝﾗﾝ♪~*~*~Player X has won!~*~*~");
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
    endGame();
  }
}

function checkWinO(board) {
  var stringBoardO = board.toString();
  if (stringBoardO === "O,O,O,X,4,X,X,7,8" ||  stringBoardO === "X,X,2,O,O,O,6,7,8" || stringBoardO === "O,O,O,X,X,5,6,X,8" || stringBoardO === "O,O,X,X,O,5,X,X,O" || stringBoardO === "X,X,O,O,O,X,O,X,8") {
    console.log("ヽ（￣∇￣）ノ ﾗﾝﾗﾝ♪ ~*~*~Player O has won!~*~*~");
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
    endGame();
  }
}
function checkTie(board) {
  var stringBoardTie = board.toString();
  if (stringBoardTie === "0,O,2,X,X,O,O,X,8" || stringBoardTie === "X,O,O,O,X,X,6,X,O" || stringBoardTie === "X,X,O,O,O,X,X,7,8" || stringBoardTie === "0,1,O,O,X,X,X,O,8" || stringBoardTie === "X,O,X,X,X,O,O,7,O" || stringBoardTie === "X,1,2,O,O,X,X,X,O" || stringBoardTie === "X,O,1,O,X,5,6,X,O" || stringBoardTie === "O,X,2,X,O,5,X,O,X" || stringBoardTie === "X,1,2,O,O,X,X,X,O" || stringBoardTie === "X,X,O,O,X,X,X,O,O" || stringBoardTie === "O,1,O,X,X,O,X,O,X" || stringBoardTie === "X,1,O,O,X,X,O,X,X" || stringBoardTie === "X,O,X,3,O,X,6,X,O" || stringBoardTie === "O,X,O,X,4,O,X,7,X" || stringBoardTie === "X,O,X,X,O,5,O,X,8" || stringBoardTie === "X,X,O,X,O,5,O,X,O" || stringBoardTie === "X,O,O,O,X,X,6,X,O" || stringBoardTie === "0,O,O,O,X,X,X,X,O" || stringBoardTie === "O,X,O,3,O,X,X,O,X" || stringBoardTie === "X,X,2,O,O,X,O,X,8" || stringBoardTie === "X,O,2,X,X,O,O,X,8" || stringBoardTie === "O,1,X,X,X,O,O,O,X" || stringBoardTie === "0,1,O,O,X,X,X,X,O") {
    console.log("（．＿．）It's a draw");
    endGame();
  }
}

function endGame() {
  rl.question("Game over, play again? (Y/N)", function(answer) {
    if (answer.toUpperCase() === "Y") {
      board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      startGame();
    } else if (answer.toUpperCase() ==="N") {
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
startGame();

module.exports.board = board;
module.exports.replaceNumberX = replaceNumberX;
module.exports.replaceNumberO = replaceNumberO;
