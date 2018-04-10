function letterCombinations (digits) {
  // Edge Case
  if (!digits || !digits.length) return [];

  // If contains 1 or 0 return empty array
  for (let digit of digits) {
    if (digit === '0' || digit === '1') return [];
  }

  // Create letter matches for keypad
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'y', 'x', 'z']
  }
  const sols = [];
  letterCombinationsHelper(digits, map, 0, '', sols);
  return sols;
}

function letterCombinationsHelper (digits, map, startIdx, curComb, sols) {
  // Base Case
  if (startIdx === digits.length) {
    sols.push(curComb);
    return;
  }

  const curNum = digits[startIdx];
  const letters = map[curNum];

  for (let letter of letters) {
    letterCombinationsHelper(digits, map, startIdx + 1, curComb + letter, sols);
  }
}
