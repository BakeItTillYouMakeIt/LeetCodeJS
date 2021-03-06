var mergeKLists = function(lists) {

  if (!lists || !lists.length) return null;

  let mergedLists = lists;

  while (mergedLists.length !== 1) {
    const nextLists = [];
    let len = mergedLists.length;

    for (let i = 0; i < len; i += 2) {
      const list1 = mergedLists[i];
      const list2 = mergedLists[i+1];

      const merged = mergeTwoLists(list1, list2);
      nextLists.push(merged);
    }
    mergedLists = nextLists;
  }

  return mergedLists[0];
};

function mergeTwoLists (l1, l2) {
  // Edge Cases
  if (!l1) return l2;
  else if (!l2) return l1;

  let mergedHead;
  // Set mergedHead

  if (l1.val < l2.val) {
    mergedHead = l1;
    l1 = l1.next;
  }
  else {
    mergedHead = l2;
    l2 = l2.next;
  }

  let ptr1 = l1;
  let ptr2 = l2;
  let ptrM = mergedHead;

  while (ptr1 || ptr2) {
    const val1 = ptr1 ? ptr1.val : Infinity;
    const val2 = ptr2 ? ptr2.val : Infinity;

    if (val1 < val2) {
      ptrM.next = ptr1;
      ptr1 = ptr1.next;
    }
    else {
      ptrM.next = ptr2;
      ptr2 = ptr2.next;
    }
    ptrM = ptrM.next;
  }

  return mergedHead;
}
