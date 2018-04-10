var findPairs = function(nums, k) {
  if (k < 0) return 0;
  const set = k === 0 ? new Set() : new Set(nums);
  const counted = new Set();
  let count = 0;

  for (let num of nums) {
    if (k === 0) {
      if (set.has(num) && !counted.has(num)) {
        count++;
        counted.add(num)
      }
      else set.add(num)
    }
    else if (set.has(num + k) && !counted.has(num)) {
      count++;
      counted.add(num);
    }
  }
  return count;
};
