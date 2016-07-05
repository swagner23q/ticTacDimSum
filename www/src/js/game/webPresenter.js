'use strict';

var webPresenter = function(gameState) {
  this.gameState = gameState;
  this.currentPlayer = "X";
  this.boardSize = 3;
  this.playerXWins = 0;
  this.playerOWins = 0;
  this.draws = 0;
};

webPresenter.prototype.setupBoard = function (boardSize) {
  this.gameState.setupBoard(boardSize);
  $('#gameBoard').removeClass();
  $('#gameBoard').addClass('size-' + boardSize);
  this.boardSize = boardSize;
  this.gameState.filledCells = 0;
}

webPresenter.prototype.setMove = function (row, col, value, element) {
  if (this.gameState.isValidMove(row, col)) {
    this.gameState.setMove(row, col, value);

    if (this.gameState.chkWin(row, col, value)) {
      if (value === "X") {
        this.playerXWins++;
        $('#playerXWins').html(" " + this.playerXWins);
        $('#overlay').show();
        $('#winPrompt').addClass('winX');
      } else {
        this.playerOWins++;
        $('#playerOWins').html(" " + this.playerOWins);
        $('#overlay').show();
        $('#winPrompt').addClass('winO');
      }
    }
    this.chkTie();
    this.showMove(row, col, value, element);
    this.changeCurrentPlayer();
  } else {
      alert("Not a valid move");
  }
};

webPresenter.prototype.chkTie = function () {
  if (this.gameState.chkTie()) {
    this.draws++;
    $('#overlay').show();
    $('#winPrompt').addClass('draw');
    $('#draws').html(" " + this.draws);
  }
};

webPresenter.prototype.showMove = function (row, col, value, element) {
  if (presenter.getCurrentPlayer() === "X") {
    element.addClass('bao');
  } else {
    element.addClass('eggtart');
    }
}

webPresenter.prototype.getBoard = function () {
  return this.gameState.board;
};

webPresenter.prototype.getCurrentPlayer = function () {
  return this.currentPlayer;
};

webPresenter.prototype.changeCurrentPlayer = function () {
  if (this.currentPlayer === "X") {
    this.currentPlayer = "O";

  } else {
    this.currentPlayer = "X";
  }
};

// webPresenter.prototype.showCurrentPlayer = function () {
//   if (this.getCurrentPlayer() === "X") {
//     $('#baoTurn').html('<img src="floaterHumTurn.png">');
//   } else {
//     $('#tartTurn').hide();
//     $('#baoTurn').html('<img src="floaterHumTurn.png">');
//   }
// };

webPresenter.prototype.printBoard = function () {

  var boardHtml = "<table>";
  for (var row = 0; row < this.gameState.boardSize; row++) {
    boardHtml += "<tr>";
    for (var col = 0; col < this.gameState.boardSize; col++) {
      boardHtml += "<td>" + "</td>";
    }
    boardHtml += "</tr>";
  }
  boardHtml += "</table>";

  return boardHtml;
};

webPresenter.prototype.runGame = function () {
  $('#gameBoard').html(presenter.printBoard());
  $('#gameBoard td').each(function() {
    $(this).click(function() {
      var col = $(this).index();
      var row = $(this).parent().index();

      presenter.setMove(row, col, presenter.getCurrentPlayer(), $(this));
    });
  });
};

var state = new gameState();
var presenter = new webPresenter(state);


//jQuery here
$(function() {
  presenter.setupBoard(presenter.boardSize);
  presenter.runGame();

  $('#boardSize a').each(function() {
    $(this).click(function(e) {
      var proceed = confirm("Warning! This will reset the game, continue?");
      if (proceed === true) {
        let boardSize = $(this).data('size');
        e.preventDefault();
        presenter.setupBoard(boardSize);
        presenter.runGame();
      } else {
          return;
      }
    });
  });

  $('#restart').click(function() {
    presenter.setupBoard(presenter.boardSize);
    presenter.runGame();
    $('#overlay').hide();
    $('#winPrompt').removeClass();
  });
});

module.exports.webPresenter = webPresenter;
