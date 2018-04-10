var lengthOfLIS = function(nums) {
  // Edge Case
  if (!nums || !nums.length) return 0;

  const dp = new Array(nums.length).fill(1);
  let maxSub = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    const curNum = nums[i];
    let curMaxSubSeq = 1;

    for (let j = i + 1; j < nums.length; j++) {

      if (nums[j] > curNum) {
        curMaxSubSeq = Math.max(curMaxSubSeq, dp[j] + 1)
      }
    }
    dp[i] = curMaxSubSeq;
    maxSub = Math.max(maxSub, curMaxSubSeq);
  }
  return maxSub;
};
