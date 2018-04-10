var isSameTree = function(p, q) {
  if (!p && q || p && !q) return false;
  else if (!p && !q) return true;

  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
