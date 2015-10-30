var Index = require("./index.js")

var b = new Index.Board();
var g = new Index.Game(b, "player1", "player2");



g.run(function(){
  console.log("Game Over")
});
