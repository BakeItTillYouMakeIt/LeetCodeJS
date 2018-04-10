var maxProduct = function(nums) {
  let curMaxProduct = nums[0];
  let curMinProduct = nums[0];
  let maxProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const prevMax = curMaxProduct;
    const prevMin = curMinProduct;

    curMaxProduct = Math.max(curMaxProduct * nums[i], prevMin * nums[i], nums[i]);
    curMinProduct = Math.min(curMinProduct * nums[i], prevMax * nums[i], nums[i]);
    maxProduct = Math.max(maxProduct, curMaxProduct);
  }

  return maxProduct;
};
