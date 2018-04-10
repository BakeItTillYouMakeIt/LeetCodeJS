function lowestCommonAncestor(root, nodeA, nodeB) {
  // Base Cases
  if (!root || root === nodeA || root === nodeB) return root;

   let left = lowestCommonAncestor(root.left, nodeA, nodeB);
   let right = lowestCommonAncestor(root.right, nodeA, nodeB);

   // Failure
   if (!left && !right) return null;

   // LCA
   if (left && right)  return root;

   // One of the children hit
   return left ? left : right;
}
