var minDistance = function(word1, word2) {
  if (word1.length < word2.length) {
    return editDistance(word1, word2);
  }
  return editDistance(word2, word1);
};

function editDistance (word1, word2) {
  let topRow = new Array(word1.length + 1);

  for (let c = 0; c < topRow.length; c++) {
    topRow[c] = c;
  }

  let rowCount = 1;
  while (rowCount <= word2.length) {
    let bottomRow = new Array(word1.length + 1);
    bottomRow[0] = rowCount;
    for (let c = 1; c < bottomRow.length; c++) {
      if (word1[c-1] === word2[rowCount - 1]) {
        bottomRow[c] = topRow[c - 1];
      }
      else {
        let minAdj = Math.min(bottomRow[c - 1], topRow[c], topRow[c - 1]);
        bottomRow[c] = minAdj + 1;
      }
    }
    topRow = bottomRow;
    rowCount++;
  }
  return topRow[topRow.length - 1];
}
