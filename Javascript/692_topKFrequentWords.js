var topKFrequent = function(words, k) {
  const map = {};

  for (let word of words) {
    if (word in map) map[word] += 1;
    else map[word] = 1;
  }

  const buckets = new Array(words.length);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  for (let key in map) {
    buckets[map[key]].push(key);
  }
  const sol = [];

  for (let i = buckets.length - 1; i >= 0; i--) {
    if (k === 0) break;

    if (buckets[i].length) {
      buckets[i].sort();

      for (let j = 0; j < buckets[i].length; j++) {
        let word = buckets[i][j]
        sol.push(word);
        k--;
        if (k === 0) break;
      }
    }
  }

  return sol;
};
