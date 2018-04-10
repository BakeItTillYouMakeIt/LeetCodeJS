var findSecondMinimumValue = function(root) {
  let min = Infinity;
  let secondMin = Infinity;
  return findSecond(root);

  function findSecond(root) {
      // Edge/Base Case
    if (!root) return null;

    // Check if its second min
    if (root.val < min) {
      secMin = min;
      min = root.val;
    }
    else if (root.val < secMin && root.val > min) {
      secMin = root.val;
    }

    findSecond(root.left);
    findSecond(root.right);

    if (secMin === Infinity) return -1;
    return secMin;
  }

};
