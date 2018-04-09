function solveSudoku(board) {
  solveSudokuHelp(board);
}

function solveSudokuHelp(board) {
  // Base Case
  if (isFilled(board)) {
    return true;
  }

  // Iterate over each cell
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === '.') {
        const possNums = getPossNums(board, r, c);

        for (let pos of possNums) {
          board[r][c] = pos;
          if (solveSudokuHelp(board)) return true;
          board[r][c] = '.';
        }
        return false;
      }
    }
  }

  return false;
}

function getPossNums (board, row, col) {

  const rowSet = new Set();
  const colSet = new Set();
  const subBoardSet = new Set();

  const rangesMap = {
    0: [0, 2],
    1: [0, 2],
    2: [0, 2],
    3: [3, 5],
    4: [3, 5],
    5: [3, 5],
    6: [6, 8],
    7: [6, 8],
    8: [6, 8],
  }

  // Add row elements to row set
  for (let c = 0; c < 9; c++) {
    rowSet.add(board[row][c]);
  }

  // Add col elements to col set
  for (let r = 0; r < 9; r++) {
    colSet.add(board[r][col]);
  }

  // Add suboardElements to subboardSet
  let rowRange = rangesMap[row];
  let colRange = rangesMap[col];

  for (let r = rowRange[0]; r <= rowRange[1]; r++) {
    for (let c = colRange[0]; c <= colRange[1]; c++) {
      subBoardSet.add(board[r][c]);
    }
  }
  const possibleNums = [];

  // Iterate and find min number
  for (let i = 1; i <= 9; i++) {
    i = String(i);
    if (!rowSet.has(i) && !colSet.has(i) && !subBoardSet.has(i)) {
      possibleNums.push(i);
    }
  }

  return possibleNums;
}

function isFilled(board) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === '.') return false;
    }
  }

  return true;
}
