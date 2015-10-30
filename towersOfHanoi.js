var readline = require ('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var HanoiGame = function() {
  this.stacks = [[3, 2, 1], [], []];
};

HanoiGame.prototype.isWon = function() {
  if (this.stacks[1].length === 3 || this.stacks[2].length === 3) {
    return true
  } else {
    return false
  }
};

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  var startTowerStack = this.stacks[startTowerIdx];
  var startTowerItem = startTowerStack[startTowerStack.length - 1];
  var endTowerStack = this.stacks[endTowerIdx];
  var endTowerItem = endTowerStack[endTowerStack.length - 1];
  if (this.stacks[startTowerIdx].length === 0) {
    return false;
  }
  else if (startTowerItem > endTowerItem){
    return false;
  }
  else {
    return true
  }
};

HanoiGame.prototype.move = function(startTowerIdx, endTowerIdx){
  if(this.isValidMove(startTowerIdx, endTowerIdx)){
    this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
    return true;
  }
  else {
    return false;
  }
};

HanoiGame.prototype.print = function() {
  console.log("stack 0: " + JSON.stringify(this.stacks[0]));
  console.log("stack 1: " + JSON.stringify(this.stacks[1]));
  console.log("stack 2: " + JSON.stringify(this.stacks[2]));
};

HanoiGame.prototype.promptMove = function(callback) {
  this.print();
  reader.question("Enter your start move: ", function (start) {
    reader.question("Enter you end move: ", function (end) {
      var startTowerIdx = parseInt(start);
      var endTowerIdx = parseInt(end);
      var currentGame = this
      callback.bind(currentGame, startTowerIdx, endTowerIdx)();
    });
  });
};

HanoiGame.prototype.run = function(completionCallback) {
  var currentGame = this;
  this.promptMove(function(start, end) {
    currentGame.move(start, end);
    if (currentGame.isWon()) {
      console.log("You win!!!");
      currentGame.print();
      completionCallback();
    } else {
      currentGame.run(completionCallback);
    }
  });
};

var game = new HanoiGame();
game.run(function() {
  reader.close();
});
