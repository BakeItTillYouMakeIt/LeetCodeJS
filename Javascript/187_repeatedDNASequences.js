var findRepeatedDnaSequences = function(s) {
  const set = new Set();
  const counted = new Set();
  const repeatedDNA = [];

  for (let i = 0; i < s.length - 9; i++) {
    const substr = s.slice(i, i + 10);
    if (set.has(substr) && !counted.has(substr)) {
      repeatedDNA.push(substr);
      counted.add(substr);
    }
    else set.add(substr);
  }

  return repeatedDNA;
};
