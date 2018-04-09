var addTwoNumbers = function(l1, l2) {

  // Edge Cases
  if (!l1) return l2;
  else if (!l2) return l1;

  let ptr1 = l1;
  let ptr2 = l2;
  let sum = ptr1.val + ptr2.val;

  const newHead = new ListNode(sum % 10);
  let ptrNew = newHead;
  ptr1 = ptr1.next;
  ptr2 = ptr2.next;
  let carry = sum >= 10 ? 1 : 0;

  while (ptr1 || ptr2 || carry) {
    let val1 = ptr1 ? ptr1.val : 0;
    let val2 = ptr2 ? ptr2.val : 0;
    sum = val1 + val2 + carry;

    // Set up carry for next iteration
    carry = sum >= 10 ? 1 : 0;
    ptrNew.next = new ListNode(sum % 10);

    ptrNew = ptrNew.next;
    if (ptr1) ptr1 = ptr1.next;
    if (ptr2) ptr2 = ptr2.next;
  }

  return newHead;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
