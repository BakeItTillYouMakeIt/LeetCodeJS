function isValidBST(tree, minVal = -Infinity, maxVal = Infinity) {
  // Base Case
  if (!tree) return true;

  // Check if current node is valid
  if (tree.val <= minVal || tree.val >= maxVal) return false;

  let isLeftValid = isValidBST(tree.left, minVal, tree.val);
  let isRightValid = isValidBST(tree.right, tree.val, maxVal);
  return isLeftValid && isRightValid;
}
