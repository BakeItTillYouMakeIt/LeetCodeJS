var reverseKGroup = function(head, k) {
  // Edge Case
  if (!head || !head.next || k <= 1) return head;

  let tempA = head;
  let count = 1;
  let ptr = head;
  while (ptr && count % k !== 0) {
    count++;
    ptr = ptr.next;
  }
  if (!ptr) return head;

  let tempB = ptr.next;
  ptr.next = null;
  let newHead = reverseList(head);
  tempA.next = tempB;
  ptr = tempB;
  count++;
  let prevTail;
  while (ptr) {
    prevTail = tempA;
    tempA = ptr;
    while (ptr && count % k !== 0) {
      count++;
      ptr = ptr.next;
    }

    if (!ptr) break;

    tempB = ptr.next;
    ptr.next = null;
    prevTail.next = reverseList(tempA);
    tempA.next = tempB;
    ptr = tempB;
    count++;
  }

  return newHead;
};


function reverseList(head) {
  // Edge Case
  if (!head) return null;

  let trail = null;
  let lead = head;

  while (lead !== null) {
    let nextNode = lead.next;
    lead.next = trail
    trail = lead;
    lead = nextNode;
  }
  return trail;
}
