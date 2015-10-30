var HanoiGame = function() {
  this.stacks = [[3, 2, 1], [], []];
};

HanoiGame.prototype.isWon = function() {
  if (this.stacks === [[], [3, 2, 1], []] || this.stacks === [[], [], [3, 2, 1]]) {
    return true
  } else {
    return false
  }
};
