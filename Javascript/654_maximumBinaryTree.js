var constructMaximumBinaryTree = function(nums) {
  // Edge/Base Case
  if (!nums.length) return null;

  let max = -Infinity;
  let mIdx = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      mIdx = i;
    }
  }
  // Create root node
  let root = new TreeNode(max);

  // Partition left half, and right half
  let lPart = nums.slice(0, mIdx);
  let rPart = nums.slice(mIdx + 1);

  root.left = constructMaximumBinaryTree(lPart);
  root.right = constructMaximumBinaryTree(rPart);

  return root;
};
