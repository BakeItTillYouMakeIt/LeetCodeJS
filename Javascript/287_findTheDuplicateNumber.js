var findDuplicate = function(nums) {
  // Initialize lo and hi pointers
  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) count++;
    }

    if (count > mid)  hi = mid;
    else lo = mid + 1;
  }

  return lo;
};
