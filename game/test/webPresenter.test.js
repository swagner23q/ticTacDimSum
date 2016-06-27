var expect = require('chai').expect;
var webPresenter = require('../webPresenter.js').webPresenter;
var gameState = require('../gameState.js').gameState;

describe('webPresenter', function() {
  beforeEach(function () {
    state = new gameState();
    presenter = new webPresenter(state);
  });
  it('will setup the board', function() {
    presenter.setupBoard(3);
    expect(state.boardSize).to.equal(3);
  });
});
