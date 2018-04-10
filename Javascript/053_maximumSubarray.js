var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let curSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSum = Math.max(curSum, maxSum);
  }

  return maxSum;
};
