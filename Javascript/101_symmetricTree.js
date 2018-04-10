var isSymmetric = function(root) {
  // Edge Case
  if (!root) return true;

 return symmetricDFS(root.left, root.right);
};

function symmetricDFS(leftNode, rightNode) {

  // Base Cases
  if (!leftNode && !rightNode) return true;
  else if (!leftNode || !rightNode) return false;
  else if (leftNode.val !== rightNode.val) return false;

  // Go left for left, and right for right
  if (!symmetricDFS(leftNode.left, rightNode.right)) return false;

  // Go right for left, and left for right
  if (!symmetricDFS(leftNode.right, rightNode.left)) return false;

  // If subtrees are symmetric then return true
  return true;
}
