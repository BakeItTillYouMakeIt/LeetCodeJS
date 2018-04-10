var shortestWordDistance = function(words, word1, word2) {
  let dist = Infinity
  let idx1 = dist, idx2 = -dist;


  let isSame = word1 === word2;

  for (let i = 0; i < words.length; i++) {
    const curWord = words[i];

    if (curWord === word1) {
        if (isSame) {
          idx1 = idx2;
          idx2 = i;
        }
        else idx1 = i;
    }
    else if (curWord === word2) idx2 = i;

    dist = Math.min(dist, Math.abs(idx1 - idx2));
  }
  return dist;
};
