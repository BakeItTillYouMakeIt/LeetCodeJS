var shortestDistance = function(words, word1, word2) {
  let minDist = Infinity;
  let w1Idx = -1;
  let w2Idx = -1;

  for (let i = 0; i < words.length; i++) {
    // Get current word
    const word = words[i];

    // Update last seen index
    if (word === word1) w1Idx = i;
    else if (word === word2) w2Idx = i;

    if (w1Idx !== -1 && w2Idx !== -1) {
      minDist = Math.min(minDist, Math.abs(w1Idx - w2Idx));
    }
  }

  return minDist;
};
