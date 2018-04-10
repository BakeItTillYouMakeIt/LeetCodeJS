var isSubtree = function(s, t) {
  // Edge Cases
  if (!s && !t) return true;
  else if(!s || !t) return false;

  const queue = [s];
  let cLC = 1;

  while (queue.length) {
    let nLC = 0;

    while(cLC--) {
      let cN = queue.shift();
      if (cN.val === t.val && isIdentical(cN, t)) return true;

      if (cN.left) {
        nLC++;
        queue.push(cN.left);
      }

      if (cN.right) {
        nLC++;
        queue.push(cN.right);
      }
    }

    cLC = nLC;
  }

  return false;
};

function isIdentical(s, t) {
  // Edge/Base Cases
  if (!s && !t) return true;
  else if (!s || !t) return false;

  if (s.val !== t.val) return false;

  return isIdentical(s.left, t.left) && isIdentical(s.right, t.right);
}
