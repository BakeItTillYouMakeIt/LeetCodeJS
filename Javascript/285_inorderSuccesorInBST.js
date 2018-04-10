var inorderSuccessor = function(root, p) {
  // Edge Case
  if (!root || !p) return null;

  let ptr = root;
  let successor = null;

  while (ptr !== p && ptr) {
    if (ptr.val > p.val) {
      if (!successor) successor = ptr;
      else if (ptr.val < successor.val) successor = ptr;
    }

    if (p.val > ptr.val) ptr = ptr.right;
    else ptr = ptr.left;
  }

  // Edge Case, p not found
  if (!p) return null;

  // Check if it has a right child
  if (ptr.right) return getMinimum(ptr.right);

  // No right child, return the successor we found on the way to the node
  return successor;
};

function getMinimum(root) {
  while (root.left) root = root.left;
  return root;
}
