var searchInsert = function(nums, target) {
  // Edge Case
  if (target > nums[nums.length - 1]) return nums.length;

  let lo = 0;
  let hi = nums.length;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) hi = mid - 1;
    else lo = mid + 1;
  }
  return lo;
};
