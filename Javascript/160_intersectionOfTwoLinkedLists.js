var getIntersectionNode = function(head1, head2) {
  let ptr1 = head1;
  let ptr2 = head2;

  let length1 = findLengthLL(head1);
  let length2 = findLengthLL(head2);

  if (length1 > length2) {
      ptr1 = adjustPtr(ptr1, length1 - length2);
  }
  else if (length1 < length2) {
      ptr2 = adjustPtr(ptr2, length2 - length1);
  }

  while (ptr1 !== null && ptr2 !== null) {
      if (ptr1 === ptr2) {
          return ptr1;
      }
      ptr1 = ptr1.next;
      ptr2 = ptr2.next;
  }

  return null;
};

// Helper functions
function adjustPtr(ptr, moves) {
  while(moves > 0) {
      ptr = ptr.next;
      moves--;
  }
  return ptr;
}

function findLengthLL (head) {
  let count = 0;

  while (head !== null) {
      head = head.next;
      count++;
  }
  return count;
}
