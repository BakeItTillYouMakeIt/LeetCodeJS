var findDuplicates = function(nums) {
  let hashSet = new Set();
  let returnArr = [];

  for (let i = 0; i < nums.length; i++) {
      if (hashSet.has(nums[i])) {
          returnArr.push(nums[i]);
      }
      else {
          hashSet.add(nums[i]);
      }
  }

  return returnArr;
};
