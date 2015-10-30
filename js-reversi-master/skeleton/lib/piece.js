/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
  this.color= color
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function (currColor) {
  var oppPiece = (currColor === "black" ? "white" : "black");
  return oppPiece;
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
  this.color = this.oppColor(this.color);
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
  var colorString = this.color.charAt(0).toUpperCase();
  return colorString;
};

module.exports = Piece;
