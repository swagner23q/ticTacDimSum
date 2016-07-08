'use strict';

function openNav() {
  document.getElementById("mySidenav").style.width = "75%";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var webPresenter = function(gameState) {
  this.gameState = gameState;
  this.currentPlayer = "X";
  this.boardSize = 3;
  this.playerXWins = 0;
  this.playerOWins = 0;
  this.draws = 0;
  this.players = [];
  this.characterMap = {
    1: '/gfx/vectors/eggtart.png',
    2: '/gfx/vectors/bao.png',
    3: '/gfx/vectors/harGow.png',
    4: '/gfx/vectors/dumpling.png',
    5: '/gfx/vectors/shumai.png',
    6: '/gfx/vectors/sesame.png'
  };
};

webPresenter.prototype.setupBoard = function (boardSize) {
  this.gameState.setupBoard(boardSize);
  $('#gameBoard').removeClass();
  $('#gameBoard').addClass('size-' + boardSize);
  this.boardSize = boardSize;
  this.gameState.filledCells = 0;
  this.changeCurrentPlayer();
  this.players["X"] = [];
  this.players["O"] = [];
  this.players["X"]['charId'] = 2;
  this.players["O"]['charId'] = 1;
}

webPresenter.prototype.setPlayerCharacter = function (player, charId) {
  this.players[player]['charId'] = charId;
};

webPresenter.prototype.setMove = function (row, col, value, element) {
  if (this.gameState.isValidMove(row, col)) {
    this.gameState.setMove(row, col, value);

    if (this.gameState.chkWin(row, col, value)) {
      if (value === "X") {
        // audio3.play();
        this.playerXWins++;
        $('#playerXWins').html(" " + this.playerXWins);
        $('#overlay').show();
        $('#winPrompt').addClass('winX');
        $('#winPrompt').animate({height: '40vh'});
      } else {
        // audio3.play();
        this.playerOWins++;
        $('#playerOWins').html(" " + this.playerOWins);
        $('#overlay').show();
        $('#winPrompt').addClass('winO');
        $('#winPrompt').animate({height: '40vh'});
      }
    } else {
      this.chkTie();
    }
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
    $('#winPrompt').animate({height: '40vh'});
    $('#draws').html(" " + this.draws);
  }
};

webPresenter.prototype.showMove = function (row, col, value, element) {
  if (presenter.getCurrentPlayer() === "X") {
    audio.play();
    element.addClass('playerIcon');
    element.css('background-image', 'url(' + this.characterMap[this.players["X"]['charId']] + ')');

  } else {
    audio2.play();
    element.addClass('playerIcon');
    element.css('background-image', 'url(' + this.characterMap[this.players["O"]['charId']] + ')');
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
    $('#playerO').attr('src', '/gfx/vectors/floaterEtartTurn.png');
    $('#playerX').attr('src', '/gfx/vectors/floaterHum.png');
  } else {
    this.currentPlayer = "X";
    $('#playerX').attr('src', '/gfx/vectors/floaterBaoTurn.png');
    $('#playerO').attr('src', '/gfx/vectors/floaterEtart.png');
  }
};

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
var audio = new Audio('/sfx/punch.mp3');
var audio2 = new Audio('/sfx/splat.wav');
var audio3 = new Audio('/sfx/win.mp3');

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
  $('#boardSizes a').each(function() {
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

  $('#boards').click(function() {
  $('#boardSizes').toggle();
  });

  $('.toggleCharBox').each(function() {
    $(this).click(function(e) {
      $(this).find('.charBox').slideToggle();
    });
  });

  $('#chooseCharacter a').each(function() {
    $(this).click(function(e) {
      if (presenter.gameState.filledCells === 0) {
        e.preventDefault();
        let charId = $(this).data('charid');
        if ($(this).parent().attr('id') === 'playerOne') {
          presenter.setPlayerCharacter("O", charId);
        } else {
            presenter.setPlayerCharacter("X", charId);
        }

      } else {
        alert("You must have a new game to change characters");
      }
    });
  });
  $('#chooseCharacter2 a').each(function() {
    $(this).click(function(e) {
      if (presenter.gameState.filledCells === 0) {
        e.preventDefault();
        let charId = $(this).data('charid');
        if ($(this).parent().attr('id') === 'playerOne') {
          presenter.setPlayerCharacter("O", charId);
        } else {
            presenter.setPlayerCharacter("X", charId);
        }

      } else {
        alert("You must have a new game to change characters");
      }
    });
  });

//   (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
});


module.exports.webPresenter = webPresenter;
