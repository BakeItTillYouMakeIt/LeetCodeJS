// Time: O(N)
// Space: O(N)

var twoSum = function(nums, target) {

  const hMap = {};

  for (let i = 0; i < nums.length; i++) {
    const curEle = nums[i];
    const goal = target - curEle;

    if (goal in hMap) {
      return [hMap[goal], i];
    }

    hMap[curEle] = i;
  }
};
