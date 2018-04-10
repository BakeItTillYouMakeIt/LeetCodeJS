var findAnagrams = function(s, p) {
  if (!s.length || !p.length || p.length > s.length) return [];

  const letters = new Array(26).fill(0);
  const curLetters = new Array(26).fill(0);
  const sols = [];

  for (let i = 0; i < p.length; i++) {
    let idx1 = p[i].charCodeAt(0) - 'a'.charCodeAt(0);
    let idx2 = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    letters[idx1] += 1;
    curLetters[idx2] += 1;
  }

  let lo = 0;
  let hi = p.length;

  while (hi <= s.length) {

    if (isAnagram(curLetters, letters)) sols.push(lo);
    if (hi === s.length) break;

    // Add new letter
    let idx1 = s[hi].charCodeAt(0) - 'a'.charCodeAt(0);
    curLetters[idx1] += 1;

    // Remove old letter
    let idx2 = s[lo].charCodeAt(0) - 'a'.charCodeAt(0);
    curLetters[idx2] -= 1;
    lo++;
    hi++;
  }

  return sols;
};

function isAnagram(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}
