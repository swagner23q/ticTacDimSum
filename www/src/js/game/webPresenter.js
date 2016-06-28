'use strict';

var webPresenter = function(gameState) {
  this.gameState = gameState;
  this.currentPlayer = 0;
};

webPresenter.prototype.setupBoard = function (boardSize) {
  this.gameState.setupBoard(boardSize);
}

webPresenter.prototype.printBoard = function () {
  var boardHtml = "<table>";
  for (var row = 0; row < this.gameState.boardSize; row++) {
    boardHtml += "<tr>";
    for (var col = 0; col < this.gameState.boardSize; col++) {
      boardHtml += "<td>" + this.gameState.board[row][col] + "</td>";
    }
    boardHtml += "</tr>";
  }
  boardHtml += "</table>";

  return boardHtml;
};

webPresenter.prototype.setMove = function (row, col, value) {
  this.gameState.setMove(row, col, value);
  this.changeCurrentPlayer();
};

webPresenter.prototype.getBoard = function () {
  return this.gameState.board;
};

webPresenter.prototype.getCurrentPlayer = function () {
  return this.currentPlayer;
};

webPresenter.prototype.changeCurrentPlayer = function () {
  if (this.currentPlayer === 0) {
    this.currentPlayer = 1;
  } else {
    this.currentPlayer = 0;
  }
};

webPresenter.prototype.runGame = function () {
  $('#gameBoard').html(presenter.printBoard());
  $('#gameBoard td').each(function() {
    $(this).click(function() {
      var col = $(this).index();
      var row = $(this).parent().index();

      presenter.setMove(row, col, presenter.getCurrentPlayer());
      $(this).html(presenter.getCurrentPlayer());

      console.log(presenter.getBoard());
    });
  });
};

var state = new gameState();
var presenter = new webPresenter(state);


//jQuery here
$(function() {
  presenter.setupBoard(3);
  presenter.runGame();

  $('#boardSize a').each(function() {
    $(this).click(function(e) {
      let boardSize = $(this).data('size');
      e.preventDefault();
      presenter.setupBoard(boardSize);
      presenter.runGame();
    });
  });

});



module.exports.webPresenter = webPresenter;
