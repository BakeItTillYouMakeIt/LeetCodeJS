var missingNumber = function (nums) {
  const hSet = new Set(nums);
  const size = nums.length;

  for (let i = 0; i <= size; i++) {
    if (!hSet.has(i)) return i;
  }

  return -1;
};

//Time O(n), Space 0(1)

const missingNumber = nums => {
  for (let i in nums) {
    if (nums[nums[i]] || nums[nums[i]] === 0) nums[nums[i]] = nums[nums[i]].toString()
  }
  for (let i in nums) {
    if (typeof nums[i] !== 'string') return +i
  }
  return nums.length
}
