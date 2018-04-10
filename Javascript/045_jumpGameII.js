var jump = function(nums) {
  // Edge Cases
  if (nums.length <= 1) return 0;
  if (nums[0] >= nums.length - 1) return 1;

  let maxReach = nums[0];
  let steps = nums[0];
  let i = 1;
  let jumps = 1;

  while (steps && i < nums.length - 1) {
    steps--;
    maxReach = Math.max(maxReach, nums[i] + i);

    if (maxReach >= nums.length - 1) {
      jumps++;
      break;
    }
    if (!steps) {
      steps = maxReach - i;
      jumps++;
    }
    i++;
  }
  return jumps;
};
