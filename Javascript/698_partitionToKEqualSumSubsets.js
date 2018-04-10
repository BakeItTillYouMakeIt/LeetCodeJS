var canPartitionKSubsets = function(nums, k) {
  let n = nums.length;
  // The entire array can be partitioned
  if (k === 1) return true;

  // If total number of partitions are more than N, then we know its not possible
  if (n < k) return false;

  // Check to see if the sum is divisible by k
  let sum = 0;
  for (let num of nums) sum += num;
  if (sum % k !== 0) return false;

  // Each subset now should have a sum of sum/k
  const subset = sum / k;

  const subsetSum = new Array(k).fill(0);
  const taken = new Array(n).fill(false);

  // Initialize first subset sum as the last element of the array
  subsetSum[0] = nums[n-1];
  taken[n-1] = true;

  return canPartitionHelper(nums, subsetSum, taken, subset, k, n, 0, n-2);

};

function canPartitionHelper(nums, subsetSum, taken, subset, k, n, curIdx, limitIdx) {

  if (subsetSum[curIdx] === subset) {
       /*  current index (K - 2) represents (K - 1) subsets of equal
            sum last partition will already remain with sum 'subset'*/
        if (curIdx === k - 2) return true;

        //  recursive call for next subsetition
        return canPartitionHelper(nums, subsetSum, taken, subset, k, n, curIdx + 1, n - 1);
  }

  for (let i = limitIdx; i >= 0; i--) {
    // If already taken, continue
    if (taken[i]) continue;

    let temp = subsetSum[curIdx] + nums[i];
    if (temp <= subset) {

      //  mark the element and include into current partition sum
      taken[i] = true;
      subsetSum[curIdx] += nums[i];
      let nxt = canPartitionHelper(nums, subsetSum, taken, subset, k, n, curIdx, i - 1);

      // after recursive call unmark the element and remove from subset  sum
      taken[i] = false;
      subsetSum[curIdx] -= nums[i];
      if (nxt)  return true;

    }
  }

  return false;
}
