var lengthOfLastWord = function(s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ' ' && count === 0) {
          continue;
      }
      count++;
      if (s[i] === ' ' && count > 0) {
          return count - 1;
      }
  }
  return count;
};
