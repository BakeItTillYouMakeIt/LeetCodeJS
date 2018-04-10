var verticalOrder = function(root) {
  if (!root) return [];

  root.level = 0;
  const lM = {};
  const queue = [root];
  let cLC = 1, minL = Infinity, maxL = -Infinity;

  while(queue.length) {
    let nLC = 0;

    while (cLC--) {
      const cN = queue.shift();

      if (cN.left) {
        cN.left.level = cN.level - 1;
        queue.push(cN.left);
        nLC++;
      }

      if (cN.right) {
        cN.right.level = cN.level + 1;
        queue.push(cN.right);
        nLC++;
      }

      if (cN.level in lM) lM[cN.level].push(cN.val);
      else lM[cN.level] = [cN.val];
      minL = Math.min(minL, cN.level);
      maxL = Math.max(maxL, cN.level);
    }
    cLC = nLC;
  }

  const vertOrderArr = [];

  for (let key = minL; key <= maxL; key++) {
    vertOrderArr.push(lM[key]);
  }

  return vertOrderArr;
}
