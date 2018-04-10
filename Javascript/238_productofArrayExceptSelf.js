var productExceptSelf = function(nums) {
  // Initialize solutions array
  const sol = new Array(nums.length).fill(1);
  let pSF = 1;

  // Go left to right
  for (let i = 0; i < nums.length; i++) {
    sol[i] *= pSF;
    pSF *= nums[i];
  }

  // Reset product so far
  pSF = 1;

  // Go right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    sol[i] *= pSF;
    pSF *= nums[i];
  }

  return sol;
};
