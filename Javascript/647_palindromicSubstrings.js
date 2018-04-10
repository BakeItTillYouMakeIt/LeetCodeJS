var countSubstrings = function(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // Even
    count += countPalindromes(s, i, i + 1);
    // odd
    count += countPalindromes(s, i, i);
  }

  return count;
};

function countPalindromes(s, leftIdx, rightIdx) {
  let count = 0;

  while (leftIdx >= 0 && rightIdx < s.length && s[leftIdx] === s[rightIdx]) {
    count++;
    leftIdx--;
    rightIdx++;
  }

  return count;
}
