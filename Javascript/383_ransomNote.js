var canConstruct = function(ransomNote, magazine) {
  const hMap = {};

  for (const c of magazine) {
    if (c in hMap) hMap[c] += 1;
    else hMap[c] = 1;
  }

  for (const c of ransomNote) {
    if (c in hMap && hMap[c] !== 0) {
      hMap[c] -= 1;
    }
    else return false;
  }

  return true;
};
