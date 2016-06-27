'use strict';

var webPresenter = function(gameState) {
  this.gameState = gameState;
};

webPresenter.prototype.setupBoard = function (boardSize) {
  this.gameState.setupBoard(3);

}

module.exports.webPresenter = webPresenter;
