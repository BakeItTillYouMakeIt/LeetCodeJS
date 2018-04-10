var levelOrder = function(root) {
  // Edge Case
  if (!root) return [];

  const queue = [root];
  const sol = [];

  let lC = 1;

  while (queue.length) {
    let curLevel = [];
    let nLC = 0;

    while (lC--) {
      const curNode = queue.shift();

      // Check left
      if (curNode.left) {
        queue.push(curNode.left);
        nLC++;
      }

      // Check right
      if (curNode.right) {
        queue.push(curNode.right);
        nLC++;
      }

      curLevel.push(curNode.val);
    }

    sol.push(curLevel);
    lC = nLC;
  }

  return sol;
};
