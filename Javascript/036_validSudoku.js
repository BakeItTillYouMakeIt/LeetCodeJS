var isValidSudoku = function(board) {
  if (areRowsValid(board) && areColsValid(board) && areSubBoardsValid(board)) return true;
  return false;
}

function areRowsValid (board) {
  for (let r = 0; r < board.length; r++) {
    const colSet = new Set();

    for (let c = 0; c < board[0].length; c++) {
      const ele = board[r][c];
      if (ele === '.') continue;
      else if (colSet.has(ele)) return false;
      else colSet.add(ele)
    }
  }

  return true;
}

function areColsValid (board) {
  for (let c = 0; c < board[0].length; c++) {
    const rowSet = new Set();

    for (let r = 0; r < board.length; r++) {
      const ele = board[r][c];
      if (ele === '.') continue;
      if (rowSet.has(ele)) return false;
      else rowSet.add(ele);
    }
  }
  return true;
}

function areSubBoardsValid (board) {
  const ranges = [[0, 2], [3, 5], [6, 8]];

  for (let rowRangeIdx = 0; rowRangeIdx < ranges.length; rowRangeIdx++) {
    for (let colRangeIdx = 0; colRangeIdx < ranges.length; colRangeIdx++) {
      const rowMin = ranges[rowRangeIdx][0];
      const rowMax = ranges[rowRangeIdx][1];
      const colMin = ranges[colRangeIdx][0];
      const colMax = ranges[colRangeIdx][1];

      const subboardSet = new Set();

      for (let r = rowMin; r <= rowMax; r++) {
        for (let c = colMin; c <= colMax; c++) {
          const ele = board[r][c];
          if (ele === '.') continue;
          else if (subboardSet.has(ele)) return false;
          else subboardSet.add(ele);
        }
      }
    }
  }

  return true;
}
