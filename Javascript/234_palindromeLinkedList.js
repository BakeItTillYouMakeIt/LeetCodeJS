var isPalindrome = function(head) {
  // Send runner, and walker pointers to get midpoint
  // Once we got midpoint then get new pointer to start at the head and check to see if they are the same

  // Get midpoint pointer
  let ptrFast = head;
  let ptrSlow = head;

  while (ptrFast !== null) {
      if (ptrFast.next !== null) {
          ptrFast = ptrFast.next.next;
      } else {
          ptrFast = ptrFast.next;
      }
      ptrSlow = ptrSlow.next;
  }

  let stack = [];

  while (ptrSlow !== null) {
      stack.push(ptrSlow.val);
      ptrSlow = ptrSlow.next;
  }

  let ptrStart = head;

  while (stack.length > 0) {
      let stackVal = stack.pop();
      if (stackVal !== ptrStart.val) {
          return false;
      }
      ptrStart = ptrStart.next;
  }

  return true;

};
