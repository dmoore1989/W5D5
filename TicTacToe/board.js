var Board = function() {
  this.grid = [["*", "*", "*"],["*", "*", "*"],["*", "*", "*"]];
}

Board.prototype.isWon = function() {
  if ( this.grid[0][0] === this.grid[1][1] && this.grid[2][2] === this.grid[1][1] && this.grid[1][1] !== "*") {
    console.log("1");
    return true;
  } else if ( this.grid[0][2] === this.grid[1][1] && this.grid[2][0] === this.grid[1][1] && this.grid[1][1] !== "*") {
console.log("2");
    return true;
  }

  for (var i = 0; i < 3; i++) {
    if (this.grid[i][0] === this.grid[i][1] && this.grid[i][1] === this.grid[i][2] && this.grid[i][1] !== "*") {
      console.log("3");
      return true;
    } else if (this.grid[0][i] === this.grid[1][i] && this.grid[1][i] === this.grid[2][i] && this.grid[1][i] !== "*") {
      console.log("4");
      return true;
    }
  };

  return false;
};

Board.prototype.isValid = function(x,y) {
  if((x < 3 && y < 3 && x >= 0 && y >= 0) && this.grid[x][y] === "*" ){
    return true;
  }
  else{
    return false;
  }
};

Board.prototype.placeMark = function(x,y, mark){
  this.grid[x][y] = mark;
};

Board.prototype.render = function() {
  for (var i = 0; i < this.grid.length; i++) {
    console.log("-------------------");
    console.log("----" + this.grid[i][0] + "----" + this.grid[i][1] +  "----" + this.grid[i][2]+ "----");
    console.log("-------------------");
  };
};

Board.prototype.isFull = function() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (this.grid[i][j] === "*") {
        return false;
      }
    };
  };
  return true;
};

module.exports = Board;
