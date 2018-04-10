var deleteDuplicates = function(head) {
  if (head === null) return null;
  const visited = new Set();
  let ptr = head;

  while (ptr.next !== null) {
    visited.add(ptr.val)
    if (visited.has(ptr.next.val)) {
      ptr.next = ptr.next.next;
    }
    else {
      ptr = ptr.next;
    }
  }
  return head;
};
