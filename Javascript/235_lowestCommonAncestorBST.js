var lowestCommonAncestor = function(root, p, q) {
  let ptr1 = root;
  let ptr2 = root;
  let common = root;

  while (ptr1 === ptr2 && ptr1 && ptr2) {
    if (ptr1 === ptr2) common = ptr1;

    if (ptr1 !== p) {
      if (p.val < ptr1.val) ptr1 = ptr1.left
      else ptr1 = ptr2.right;
    }

    if (ptr2 !== q) {
      if (q.val < ptr2.val) ptr2 = ptr2.left;
      else ptr2 = ptr2.right;
    }
  }

  return common;
};
