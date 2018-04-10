var minPathSum = function(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {

      const bottomCost = r + 1 < rows ? grid[r+1][c] : Infinity;
      const rightCost =  c + 1 < cols ? grid[r][c+1] : Infinity;

      if (bottomCost !== Infinity || rightCost !== Infinity) {
          grid[r][c] += Math.min(bottomCost, rightCost);
      }

    }
  }
  return grid[0][0]
};
