var binaryTreePaths = function(root, curPath = [], paths = []) {
  // Edge Case, root is null
  if (!root) return [];

  // Base Case, hit a leaf
  if (!root.left && !root.right) {
    curPath.push(root.val);
    paths.push(curPath.join('->'));
    return paths;
  }
  // Go left
  binaryTreePaths(root.left, curPath.concat(root.val), paths);

  // Go right
  binaryTreePaths(root.right, curPath.concat(root.val), paths);

  return paths;

};
