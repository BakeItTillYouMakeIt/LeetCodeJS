var detectCycle = function(head) {

  let hSet = new Set();

  if (hasCycle(head)) {
      let ptr = head;

      while(!hSet.has(ptr)) {
          hSet.add(ptr);
          ptr = ptr.next;
      }
      return ptr;
  }

  return null;
};

function hasCycle (head) {
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
}
