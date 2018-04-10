var setZeroes = function(matrix) {
  // Edge Case
  if (!matrix || matrix.length === 0) return;

  let rows = new Set();
  let cols = new Set();

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        rows.add(r);
        cols.add(c);
      }
    }
  }

  rows.forEach((row) => {
    for (let c = 0; c < matrix[0].length; c++) {
      matrix[row][c] = 0;
    }
  })

  cols.forEach((col) => {
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][col] = 0;
    }
  })
};
