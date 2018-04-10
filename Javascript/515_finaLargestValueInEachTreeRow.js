var largestValues = function(root) {
  // Edge Case
  if (!root) return [];

  const queue = [root];
  const sol = [];
  let levelCount = 1;

  while (queue.length) {
    let nextLevelCount = 0
    let max = -Infinity;

    while (levelCount--) {
      const node = queue.pop();

      if (node.left) {
        queue.unshift(node.left);
        nextLevelCount++;
      }

      if (node.right) {
        queue.unshift(node.right);
        nextLevelCount++;
      }

      max = Math.max(max, node.val);
    }
    sol.push(max);
    levelCount = nextLevelCount;
  }

  return sol;
};
