var minSubArrayLen = function(s, nums) {

  if (!nums || !nums.length) return 0;

  let total = nums[0];
  let min = Infinity;
  let lo = 0;
  let hi = 1;

  while (hi <= nums.length) {
    if (total >= s) {
      min = Math.min(hi - lo, min);
      total -= nums[lo];
      lo++;
    }
    else if (total < s && hi < nums.length) {
      total += nums[hi];
      hi++;
    }
    else break;
  }

  return min !== Infinity ? min : 0;
};
