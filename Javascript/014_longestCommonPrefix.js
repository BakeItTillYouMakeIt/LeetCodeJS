var longestCommonPrefix = function(strs) {
  if (strs.length === 0 || strs[0].length === 0) return '';
  let j;
  let prefix = '';

  for (j = 0; j < strs[0].length; j++) {
   for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i][j] !== strs[i+1][j]) return prefix;
    }
    prefix += strs[0][j];
  }
  return prefix;
};
