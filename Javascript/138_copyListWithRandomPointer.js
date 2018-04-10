var copyRandomList = function(head) {
  // Edge Case
  if (!head) return head;

  const hMap = new Map();
  let newHead = new RandomListNode(head.label);
  hMap.set(head, newHead);

  let ptr = head.next;
  let ptrCopy = newHead;

  while (ptr) {
    ptrCopy.next = new RandomListNode(ptr.label);
    ptrCopy = ptrCopy.next;
    // Store key value matching of nodes
    hMap.set(ptr, ptrCopy);
    ptr = ptr.next;
  }
  // Move pointers back to start
  ptr = head;
  ptrCopy = newHead;

  while (ptr) {
    if (ptr.random === null) {
      ptrCopy.random = null;
    }
    else {
      ptrCopy.random = hMap.get(ptr.random);
    }
    ptr = ptr.next;
    ptrCopy = ptrCopy.next;
  }

  return newHead;
};
