var containsDuplicate = function(nums) {
  const hSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (hSet.has(nums[i])) return true;
    else hSet.add(nums[i])
  }
  return false;
};
