var containsNearbyDuplicate = function(nums, k) {
  // Put everything in a HashMap, key ele, val idx
  const hMap = {};

  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num in hMap) {
          if ((i - hMap[num]) <= k) return true;
          else hMap[num] = i
      }
      else hMap[num] = i;
  }

  return false;
};
