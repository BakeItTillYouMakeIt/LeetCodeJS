var multiply = function(A, B) {
  let mA = A.length;
  let nA = A[0].length; // colA
  let mB = B.length; // rowB
  let nB = B[0].length;

  let multMatrix = newMatrix(mA, nB);

  for (let r = 0; r < multMatrix.length; r++) {
    for (let c = 0; c < multMatrix[0].length; c++) {
      let res = 0;
      for (let i = 0; i < nA; i++) {
        res += A[r][i] * B[i][c]
      }
      multMatrix[r][c] = res;
    }
  }

  return multMatrix;
};

function newMatrix(rows, cols) {
  let matrix = new Array(rows);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(cols);
  }

  return matrix;
}
