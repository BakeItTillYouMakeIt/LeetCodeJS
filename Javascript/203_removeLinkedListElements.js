var removeElements = function(head, val) {

  // Edgecase
  if (head === null) {
      return null;
  }

  // Edgecase, head is a val
  while(head !== null && head.val === val) {
      head = head.next;
  }

  let ptr = head;

  while (ptr !== null && ptr.next !== null) {
      if (ptr.next.val === val) {
          // By pass value that is val
          ptr.next = ptr.next.next;
      } else {
          ptr = ptr.next;
      }
  }
  return head;
};
