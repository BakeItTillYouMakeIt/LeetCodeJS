var generateMatrix = function(n) {

  let rowMin = 0;
  let rowMax = n - 1;
  let colMin = 0;
  let colMax = n - 1;

  // Make spiral matrix
  const spiralMatrix = new Array(n);

  for (let i = 0; i < n; i++) {
    spiralMatrix[i] = new Array(n).fill(0);
  }
  let count = 1;

  while (rowMin <= rowMax && colMin <= colMax) {
    // Top
    for (let c = colMin; c <= colMax; c++) {
      spiralMatrix[rowMin][c] = count;
      count++;
    }
    rowMin++;

    // Right
    for (let r = rowMin; r <= rowMax; r++) {
      spiralMatrix[r][colMax] = count;
      count++;
    }
    colMax--;

    // Bottom
    if (rowMin <= rowMax) {
      for (let c = colMax; c >= colMin; c--) {
        spiralMatrix[rowMax][c] = count;
        count++;
      }
      rowMax--;
    }

    // Left
    if (colMin <= colMax) {
      for (let r = rowMax; r >= rowMin; r--) {
        spiralMatrix[r][colMin] = count;
        count++;
      }
      colMin++;
    }
  }

  return spiralMatrix;
};
