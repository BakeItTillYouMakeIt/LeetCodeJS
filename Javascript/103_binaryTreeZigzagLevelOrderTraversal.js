var zigzagLevelOrder = function(root) {
  // Edge Case
  if (!root) return []

  const queue = [root]
  const sol = [];
  let levelCount = 1;
  let leftToRight = true;

  while (queue.length) {
    let nextLevelCount = 0;
    let level = [];

    while (levelCount--) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
        nextLevelCount++;
      }

      if (node.right) {
        queue.push(node.right);
        nextLevelCount++;
      }

      if (leftToRight) level.push(node.val);
      else level.unshift(node.val);

    }

    leftToRight = !leftToRight;
    levelCount = nextLevelCount;
    sol.push(level);
  }

  return sol;
};
