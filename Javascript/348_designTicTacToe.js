/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.n = n;
  this.rows = new Array(n).fill(0);
  this.cols = new Array(n).fill(0);
  this.diag = 0;
  this.antiDiag = 0;

};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins.
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
  [4, 0], [3, 1], [2, 2], [1, 3], [0, 4]
 */
TicTacToe.prototype.move = function(row, col, player) {

  const piece = player === 1 ? 1 : -1;

  this.rows[row] += piece;
  this.cols[col] += piece;
  if (row === col) this.diag += piece;
  if (row + col + 1 === this.n) this.antiDiag += piece;

  if (Math.abs(this.rows[row]) === this.n ||
      Math.abs(this.cols[col]) === this.n ||
      Math.abs(this.diag) === this.n ||
      Math.abs(this.antiDiag) === this.n
     ) {
    return player;
  }
  return 0;
};
