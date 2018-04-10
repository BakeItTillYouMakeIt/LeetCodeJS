var findMaxConsecutiveOnes = function(nums) {
  let zeroCount = 0;
  let lastZeroIdx = -1;
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    else {
      zeroCount++;
      if (zeroCount > 1) {
        count = i - lastZeroIdx;
        zeroCount = 1;
      }
      else count++;
      lastZeroIdx = i;
    }
    maxCount = Math.max(count, maxCount);
  }

  return maxCount;
};
