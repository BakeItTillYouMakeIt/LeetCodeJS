var removeNthFromEnd = function(head, n) {
  // Edge Case
  if (!head || !n) return head;

  let lead = head;
  let trail = head;

  // Move lead
  while (n--) {
    lead = lead.next;
  }

  // If lead is null, we need to remove the head
  if (!lead) return head.next;

  // Move both lead and trail until lead is at the last node
  while (lead.next) {
    lead = lead.next;
    trail = trail.next;
  }

  // Bypass node infront of trail
  trail.next = trail.next.next;

  return head;
};
