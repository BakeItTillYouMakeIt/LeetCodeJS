function exist (grid, word) {
  // Edge Case
  if (!grid || !grid.length) return false;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (wordSearchDFS(grid, word, row, col, 0)) return true;
    }
  }
  return false;
}

function wordSearchDFS (grid, word, row, col, wordIdx) {

  const curLetter = grid[row][col];
  // Check for fail
  if (curLetter !== word[wordIdx]) return false;
  // Check for success
  if (wordIdx === word.length - 1 && curLetter === word[wordIdx]) return true;

  // Mark visited for current DFS search
  grid[row][col] = "#";
  // DFS
  // Top
  if (isValid(row - 1, col, grid) && wordSearchDFS(grid, word, row - 1, col, wordIdx + 1)) return true;
  // Right
  if (isValid(row, col + 1, grid) && wordSearchDFS(grid, word, row, col + 1, wordIdx + 1)) return true;
  // Bottom
  if (isValid(row + 1, col, grid) && wordSearchDFS(grid, word, row + 1, col, wordIdx + 1)) return true;
  // Left
  if (isValid(row, col - 1, grid) && wordSearchDFS(grid, word, row, col - 1, wordIdx + 1)) return true;

  // Change back to allow visit
  grid[row][col] = curLetter;
  return false;
}

function isValid(row, col, grid) {
  // Check to make sure in bounds
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return false;
  return true;
}
