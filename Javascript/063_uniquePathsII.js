var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  return mark(obstacleGrid, m-1, n-1)
};


function mark(grid, r, c, memo = {}) {
  // Out of bounds
  if (r < 0 || c < 0 || grid[r][c] === 1) return 0;

  // Success
  if (r === 0 && c === 0) return 1;

  const str = r + ',' + c;
  if (str in memo) return memo[str];

  let count = 0;

  // Mark top
  count += mark(grid, r - 1, c, memo);

  // Mark left
  count += mark(grid, r, c - 1, memo);

  memo[str] = count;
  return count;
}
