var trailingZeroes = function(n) {
  // Edge Case
  if (n < 0) return -1;

  let count = 0;

  for (let i = 5; Math.floor(n/i) > 0; i *= 5) {
    count += Math.floor(n/i);
  }

  return count;
};
