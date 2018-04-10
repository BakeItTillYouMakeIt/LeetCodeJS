var numIslands = function(grid) {
  // Edge
  if (!grid || !grid.length) return 0;

  const rowLen = grid.length;
  const colLen = grid[0].length;
  let islandCount = 0;

  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {

      // See if touch an island
      if (grid[r][c] === '1') {
        dfsIslandSearch(grid, r, c, rowLen, colLen);
        islandCount++;
      }
    }
  }
  return islandCount;
};

function dfsIslandSearch(grid, r, c, rowLen, colLen) {
  // Base case of recursive calls
  // Check to see if current r and c are inbounds
  if (r < 0 || r >= rowLen || c < 0 || c >= colLen || grid[r][c] !== '1') return;

  grid[r][c] = '-1';

  // Top
  dfsIslandSearch(grid, r - 1, c, rowLen, colLen);

  // Right
  dfsIslandSearch(grid, r, c + 1, rowLen, colLen);

  // Bottom
  dfsIslandSearch(grid, r + 1, c, rowLen, colLen);

  // Left
  dfsIslandSearch(grid, r, c - 1, rowLen, colLen);

}
