var lengthOfLongestSubstring = function(str) {
  const hSet = new Set();
  let lead = 0;
  let trail = 0;
  let maxLength = 0;

  while (lead < str.length) {
      if (!hSet.has(str[lead])) {
          hSet.add(str[lead]);
          lead++;
          maxLength = Math.max(maxLength, lead - trail);
      }
      else {
          hSet.delete(str[trail]);
          trail++;
      }
  }
  return maxLength;
};
