var missingNumber = function(nums) {
  const hSet = new Set(nums);
  const size = nums.length;

  for (let i = 0; i <= size; i++) {
    if (!hSet.has(i)) return i;
  }

  return -1;
};
