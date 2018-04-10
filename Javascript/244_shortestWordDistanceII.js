var WordDistance = function(words) {
  this.map = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word in this.map) this.map[word].push(i);
    else this.map[word] = [i];
  }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
  let idx1Arr = this.map[word1];
  let idx2Arr = this.map[word2];

  let minDist = Infinity;
  let i = 0;
  let j = 0;

  while (i < idx1Arr.length && j < idx2Arr.length) {
    minDist = Math.min(minDist, Math.abs(idx1Arr[i] - idx2Arr[j]));
    if (idx1Arr[i] < idx2Arr[j]) i++;
    else j++;
  }

  return minDist;
};
