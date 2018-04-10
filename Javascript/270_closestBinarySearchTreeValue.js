var closestValue = function(root, target) {
  let minD = Infinity;
  let cV = root.val;
  let ptr = root;

  while (ptr) {
    let diff = Math.abs(target - ptr.val);

    // Check if we found a new closest value
    if (diff < minD) {
      minD = diff;
      cV = ptr.val;
    }

    // Go the next possible closest val
    if (target > ptr.val) ptr = ptr.right;
    else if (target < ptr.val) ptr = ptr.left;
    else break;
  }

  return cV;
};
