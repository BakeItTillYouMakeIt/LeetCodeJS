var rob = function(nums) {
  // Edge Cases
  if (!nums || !nums.length) return 0;
  else if (nums.length === 1) return nums[0];
  else if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let nMinus2 = nums[0];
  let nMinus1 = Math.max(nums[0], nums[1]);
  let curMax;

  for (let i = 2; i < nums.length; i++) {
    curMax = Math.max(nMinus1, nMinus2 + nums[i]);
    nMinus2 = nMinus1;
    nMinus1 = curMax;
  }
  return curMax;
};
