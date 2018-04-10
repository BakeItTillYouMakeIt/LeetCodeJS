var partitionLabels = function(str) {
  const lastLetterIndex = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    lastLetterIndex[letter] = i;
  }

  let start = 0;
  let end = 0;
  const sols = [];

  for (let i = 0; i < str.length; i++) {
    // Get letter
    const letter = str[i];

    // Get last index of this letter
    end = Math.max(end, lastLetterIndex[letter]);

    if (i === end) {
      sols.push(end + 1 - start);
      start = end + 1;
    }
  }
  return sols;
};
