var levelOrderBottom = function(root) {

  // Edge Case
  if (!root) return [];

  const queue = [root];
  const sols = [];

  let levelCount = 1;

  while (queue.length) {
    let nextLevelCount = 0;
    const curLevel = [];

    while (levelCount) {
      levelCount--;
      const node = queue.shift();

      // Check left
      if (node.left) {
        queue.push(node.left);
        nextLevelCount++;
      }

      // Check right
      if (node.right) {
        queue.push(node.right);
        nextLevelCount++;
      }

      curLevel.push(node.val);
    }

    levelCount = nextLevelCount;
    sols.unshift(curLevel);
  }

  return sols;

};
