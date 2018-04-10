var searchRange = function(nums, target) {
  const lo = searchLow(nums, target);
  const hi = searchHigh(nums, target);
  return [lo, hi];
};

function searchLow(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((hi + lo)/2);
    if (target <= nums[mid]) hi = mid -1;
    else lo = mid + 1;
  }
  if (nums[lo] === target) return lo;
  return -1;
}

function searchHigh(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((hi + lo)/2);
    if (target >= nums[mid]) lo = mid + 1;
    else hi = mid - 1;
  }

  if (nums[hi] === target) return hi;
  return -1;
}
