var canJump = function(nums) {
  // Edge Cases
  if (!nums || !nums.length) return false
  if (nums.length === 1) return true;

  let maxReach = nums[0];
  let steps = nums[0];
  let i = 1;

  while (steps > 0 && i < nums.length) {
    const curEle = nums[i];

    maxReach = Math.max(maxReach, curEle + i);
    if (maxReach >= nums.length - 1) return true;
    steps--;
    if (!steps) {
      steps = maxReach - i;
    }
    i++;
  }

  return false;
};
