function sortList (head) {
  if (!head || !head.next) return head;

  let prev = null;
  let trail = head;
  let lead = head;

  while (lead && lead.next) {
    lead = lead.next.next;
    prev = trail;
    trail = trail.next;
  }
  // Detach linked lists
  prev.next = null;

  head = sortList (head);
  trail = sortList (trail);

  return mergeTwoLists(head, trail);
}

function mergeTwoLists (l1, l2) {
  // Check for edge cases
  if (!l1 && !l2) return null;
  else if (l1 && !l2) return l1;
  else if (!l1 && l2) return l2;

  let lead1 = l1;
  let trail1 = null;
  let lead2 = l2;
  let trail2 = null;

  while (lead1 !== null && lead2 !== null) {
    if (lead1.val < lead2.val) {
      trail1 = lead1;
      lead1 = lead1.next;

      if (lead1 === null || lead1.val >= lead2.val) {
        trail1.next = lead2;
      }
    }
    else {
      trail2 = lead2;
      lead2 = lead2.next;

      if (lead2 === null || lead2.val > lead1.val) {
        trail2.next = lead1;
      }
    }
  }

  if (l1.val < l2.val) return l1;
  return l2;
}
