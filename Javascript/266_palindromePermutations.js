var canPermutePalindrome = function(s) {
  // Populate array to store frequency
const freqHMap = {};

for (let i = 0; i < s.length; i++) {
  const c = s[i];
  if (c in freqHMap) freqHMap[c] += 1;
  else freqHMap[c] = 1;
}

let oddCount = 0;

for (let key in freqHMap) {
  if (freqHMap[key] % 2 === 1) oddCount++;
  if (oddCount > 1) return false;
}

return true;
};
