var strStr = function(haystack, needle) {
  if (haystack === needle || needle === "") return 0;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
      for (let j = 0; j < needle.length; j++) {
          if (j == needle.length - 1 && haystack[i + j] === needle[j]) return i;
          if (needle[j] !== haystack[i + j]) break;
      }
  }
  return -1;
};
