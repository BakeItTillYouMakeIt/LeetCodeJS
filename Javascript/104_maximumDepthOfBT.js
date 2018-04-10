var maxDepth = function(root, length = 0) {
  if (root === null) return length;

  return Math.max(maxDepth(root.left, length + 1), maxDepth(root.right, length + 1));
};
