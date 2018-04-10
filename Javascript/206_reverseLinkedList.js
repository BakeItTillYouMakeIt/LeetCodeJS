var reverseList = function(head) {
  let prev = null;
  let cur = head;

  while (cur) {
    let next = cur.next;
    cur.next = prev;

    prev = cur;
    cur = next;
  }

  return prev;
};
