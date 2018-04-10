var inorderTraversal = function(treeRoot) {
  // Edge Case
  if (!treeRoot) return [];

  const stack = [];
  const inorderArr = [];

  while (stack.length || treeRoot) {
    // Go Left
    if (treeRoot) {
      stack.push(treeRoot);
      treeRoot = treeRoot.left;
      continue;
    }

    // Visit
    const curNode = stack.pop();
    inorderArr.push(curNode.val);

    // Go right
    treeRoot = curNode.right;
  }

  return inorderArr;
};
