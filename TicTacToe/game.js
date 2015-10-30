var Board = require("./board")

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Game = function(board) {
  this.board = board;
  this.player1 = "X";
  this.player2 = "O";
  this.currentPlayer = this.player1;
};

Game.prototype.run = function(completionCallback) {
  var currentGame = this;
  this.promptMove(function (x, y) {
    currentGame.board.placeMark(x, y, currentGame.currentPlayer);
    if (currentGame.board.isWon()) {
      currentGame.board.render();
      console.log(currentGame.currentPlayer + " Wins");
      reader.close();
      completionCallback();
    } else if (currentGame.board.isFull()) {
      currentGame.board.render();
      console.log("Game is a draw.");
      reader.close();
      completionCallback();
    } else {
      this.currentPlayer === this.player1 ? this.currentPlayer = this.player2 : this.currentPlayer = this.player1;
      currentGame.run(completionCallback);
    }
  });
};

Game.prototype.promptMove = function(callback) {
  console.log(this.currentPlayer +"'s Turn!!!'")
  this.board.render();
  var currentGame = this;
  reader.question("ENTER YOUR ROW: ", function(x){
    reader.question("ENTER YOUR COLUMN: ", function(y){
      var row = parseInt(x);
      var col = parseInt(y);
      if (currentGame.board.isValid(x,y)) {
        callback.bind(currentGame, row, col)();
      } else {
        console.log("Invalid move. Please re-enter");
        currentGame.promptMove(callback);
      }
    });
  });
};


module.exports = Game;
