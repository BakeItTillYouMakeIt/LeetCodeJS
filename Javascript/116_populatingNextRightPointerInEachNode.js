var connect = function(root) {
  // Edge Case
  if (!root) return;

  let levelStart = root;

  while (levelStart.left) {
    let ptr = levelStart;
    while(ptr) {
      ptr.left.next = ptr.right;
      if (ptr.next) ptr.right.next = ptr.next.left;
      ptr = ptr.next;
    }
    levelStart = levelStart.left;
  }
};
