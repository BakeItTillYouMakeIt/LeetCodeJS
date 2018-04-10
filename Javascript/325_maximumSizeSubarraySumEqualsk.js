var maxSubArrayLen = function(nums, k) {
  let sum = 0;
  let max = 0;
  const map = {};


  for (let i = 0; i < nums.length; i++) {
    // Add the current element
    sum = sum + nums[i];

    // Max must be i + 1 now since we are starting calculating sum from index 0 and we want the max subaray
    if (sum === k) {
      max = i + 1;
    }
    // Check if we've seen sum - k before, so that we can remove that subarray from our current subarray from 0 to i
    else if ((sum - k) in map) {
      max = Math.max(max, i - map[sum - k]);
    }
    // If we haven't encountered this current sum before than we want to store it in our map with the index location that it's at
   if (!(sum in map)) {
     map[sum] = i;
   }
  }

  return max;

};
