var invertTree = function(root) {
  // Base Case/Edge Case
  if (!root || (!root.left && !root.right)) return root;

  // Go left
  invertTree(root.left);

  // Go right
  invertTree(root.right);

  // Make a temp and swap
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
};
