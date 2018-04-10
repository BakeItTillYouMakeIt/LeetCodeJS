/*

Approach:
- Add the first k elements onto a doubly linked list

- If the new element is greater than, the prev element, remove the prev element

- If the head of the LL (the max) has an index location that is out of the current window, remove it

Ex:
              0 1  2  3 4 5 6 7
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

7
7


[3, 3, 5, 5, 6, 7]

*/

function addToLL(LL, val, idx, wS) {
  // Remove nodes from end of LL that are less than new node we are add
  while (!LL.isEmpty() && LL.tail.val < val) LL.removeFromTail();

  // Add the current node
  LL.addToTail(val, idx);

  // Remove elements from the head of the LL that are out of our current window
  while (!LL.isEmpty() && LL.head.idx < wS) LL.removeFromHead();

}

// Double LinkedList
function DLL () {
  this.head = null;
  this.tail = null;
}

DLL.prototype.printLL = function() {

  let str = [];
  let ptr = this.head;

  while (ptr) {
    str.push(ptr.val);
    ptr = ptr.next;
  }

  console.log(str.join(' -> '));
}

DLL.prototype.removeFromHead = function () {

  // If empty
  if (!this.head && !this.tail) return;
  // One element
  else if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  }
  // More than one element
  else {
    this.head = this.head.next;
    this.head.prev = null;
  }

};

DLL.prototype.addToTail = function (val, idx) {

  const newNode = new DLL_Node(val, idx);

  // If the LL is empty
  if (!this.head && !this.tail) {
    this.head = newNode;
    this.tail = newNode;
  }
  // One node
  else if (this.head === this.tail) {
    this.tail = newNode;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  // More than 1 element
  else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

DLL.prototype.removeFromTail = function () {
  // If the LL empty
  if (!this.head && !this.tail) return;

  // If the LL has one node
  else if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  }

  // More than 1 element
  else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

DLL.prototype.isEmpty = function () {
  return !this.head && !this.tail;
};


function DLL_Node (val, idx) {
  this.val = val;
  this.idx = idx;
  this.next = null;
  this.prev = null;
}

var maxSlidingWindow = function(nums, k) {
  // Edge Cases
  if (!nums.length) return [];

  const dll = new DLL();
  const maxOfWindows = [];

  let i = 0;

  while (i < k && i < nums.length) {
    addToLL(dll, nums[i], i, 0);
    i++;
  }

  maxOfWindows.push(dll.head.val);
  let windowStart = 1;

  while (i < nums.length) {
    addToLL(dll, nums[i], i, windowStart);
    maxOfWindows.push(dll.head.val);
    i++;
    windowStart++;
  }

  return maxOfWindows;
};
