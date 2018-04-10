var findLeaves = function(root) {
  // Edge Case
  if (!root) return []

  const leaves = [];
  while (root.left || root.right) {
      const l = [];
      leaveRemover(root, l);
      leaves.push(l);
  }
  leaves.push(root);
  return leaves;
};

function leaveRemover(root, leafArr) {
  if (!root) return false;
  if (!root.left && !root.right) return true;

  if (leaveRemover(root.left, leafArr)) {
      leafArr.push(root.left.val);
      root.left = null;
  }
  if (leaveRemover(root.right, leafArr)) {
      leafArr.push(root.right.val);
      root.right = null;
  }
  return false;
}
