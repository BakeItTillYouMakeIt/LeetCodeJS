var firstUniqChar = function(s) {

  // Initialize hMap
  const hMap = {};

  // Put everything in a hashMap, where the key is the letter and the val is the frequency
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (letter in hMap) hMap[letter] += 1;
    else hMap[letter] = 1;
  }

  // Iterate through string and if we encounter a letter with frequency 1 return that index;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    if (hMap[l] === 1) return i;
  }

  return -1;
};
