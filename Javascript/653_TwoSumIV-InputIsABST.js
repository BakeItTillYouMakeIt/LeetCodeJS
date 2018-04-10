var findTarget = function(root, target) {
  const nums = [];
  inorderTraverse(root, nums);

  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
    let sum = nums[lo] + nums[hi];

    if (sum === target) return true;
    else if (sum > target) hi--;
    else lo++;
  }

  return false;
};

function inorderTraverse(root, nums) {
  // Edge Case
  if (!root) return

  // Go left
  inorderTraverse(root.left, nums);

  // Visit
  nums.push(root.val);

  // Go right
  inorderTraverse(root.right, nums);
}
