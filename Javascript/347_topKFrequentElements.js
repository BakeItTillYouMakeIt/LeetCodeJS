var topKFrequent = function(nums, k) {
  const hMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hMap.has(nums[i]) ) hMap.set(nums[i], hMap.get(nums[i]) + 1);
    else hMap.set(nums[i], 1);
  }

  const buckets = new Array(nums.length + 1);

  hMap.forEach((val, key) => {
    if (!buckets[val]) buckets[val] = [key];
    else buckets[val].push(key);
  });

  const sols = [];
  let i = nums.length;
  while (i >= 0 && k > 0) {
    if (buckets[i] && buckets[i].length) {
      sols.push(buckets[i].pop());
      k--;
    }
    else {
      i--;
    }
  }
  return sols;
};
