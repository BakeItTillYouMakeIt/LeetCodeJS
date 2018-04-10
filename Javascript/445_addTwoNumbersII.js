var addTwoNumbers = function(l1, l2) {
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  let sum = addTwoNumbersNormal(l1, l2);
  return reverseList(sum);
};

var reverseList = function(head) {
  let trail = null;
  let lead = head;

  while (lead !== null) {
    let nextNode = lead.next;
    lead.next = trail
    trail = lead;
    lead = nextNode;
  }
  return trail;
};

var addTwoNumbersNormal = function(l1, l2) {
  // Edge Cases
  if (l1 === null) return l2;
  else if (l2 === null) return l1;

  // Set up variables and first node
  let sum = l1.val + l2.val;
  let carry = sum >= 10 ? 1 : 0;

  let newHead = new ListNode(sum % 10);

  let ptr1 = l1.next;
  let ptr2 = l2.next;
  let ptrNew = newHead;

  while (ptr1 !== null || ptr2 !== null) {
    // Get Values
    let val1 = ptr1 ? ptr1.val : 0;
    let val2 = ptr2 ? ptr2.val : 0;

    // Set up summed node
    let sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;

    ptrNew.next = new ListNode(sum % 10);

    // Move pointers
    ptrNew = ptrNew.next;
    if (ptr1) ptr1 = ptr1.next;
    if (ptr2) ptr2 = ptr2.next;

  }

  if (carry === 1) ptrNew.next = new ListNode(1);

  return newHead;

};
