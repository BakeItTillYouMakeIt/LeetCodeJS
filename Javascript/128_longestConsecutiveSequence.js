var longestConsecutive = function(array) {
  if (array.length === 0) return 0;

  const hMap = {};

  for (let i = 0; i < array.length; i++) {
    hMap[array[i]] = false;
  }

  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (hMap[array[i]] === false) {
      hMap[array[i]] = true;
      let hi = array[i] + 1;
      let lo = array[i] - 1;

      while (hMap[lo] === false) {
        hMap[lo] = true;
        lo--;
      }
      while (hMap[hi] === false) {
        hMap[hi] = true;
        hi++;
      }

      if ((hi - 1) - (lo + 1) >= count) {
        count = (hi - 1) - (lo + 1);
      }
    }
  }
  return count + 1;
};
