var hasCycle = function(head) {
  let leadPtr = head;
  let trailPtr = head;

  while (leadPtr !== null && leadPtr.next !== null) {
      leadPtr = leadPtr.next.next;
      trailPtr = trailPtr.next;

      if (leadPtr === trailPtr) {
          return true;
      }
  }
  return false;
};
