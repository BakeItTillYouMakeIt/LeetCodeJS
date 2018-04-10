var rotateRight = function(head, k) {
  // Edge Case
  if (!head) return null;

  const length = getLength(head);

  k = k % length;
  if (k < 0) k = k + length;

  // No rotatition needed
  if (k === 0) return head;

  let count = 0;
  let ptr = head;

  while (count < length - k - 1) {
    ptr = ptr.next;
    count++;
  }

  let partitionHead2 = ptr.next;
  ptr.next = null;
  ptr = partitionHead2;

  while (ptr.next !== null) {
    ptr = ptr.next;
  }

  ptr.next = head;

  return partitionHead2;
};

function getLength (head) {
  let count = 0;
  while (head !== null) {
    head = head.next;
    count++;
  }
  return count;
}
