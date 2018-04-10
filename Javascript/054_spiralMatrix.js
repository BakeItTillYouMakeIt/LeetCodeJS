var spiralOrder = function(matrix) {
  if (!matrix.length) return [];

  let rowMin = 0;
  let rowMax = matrix.length - 1;
  let colMin = 0;
  let colMax = matrix[0].length - 1;
  const sol = [];

  while (rowMin <= rowMax && colMin <= colMax) {

    // Top
    for (let i = colMin; i <= colMax; i++) {
      sol.push(matrix[rowMin][i])
    }
    rowMin++;

    // Right
    for (let i = rowMin; i <= rowMax; i++) {
      sol.push(matrix[i][colMax]);
    }
    colMax--;

    if (rowMin <= rowMax) {
      // Bottom
      for (let i = colMax; i >= colMin; i--) {
        sol.push(matrix[rowMax][i]);
      }
      rowMax--;
    }

    if (colMin <= colMax) {
      // Left
      for (let i = rowMax; i >= rowMin; i--) {
        sol.push(matrix[i][colMin])
      }
      colMin++
    }
  }

  return sol;
};
