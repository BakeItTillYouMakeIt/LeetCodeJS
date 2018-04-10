class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.map = new Map();
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  get (key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.update(node);
      return node.val;
    }
    return -1;
  }
  put (key, val) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = val;
      this.update(node);
    }
    else if (this.size === this.maxSize) {
      const evicted = this.removeFromTail();
      this.map.delete(evicted.key);
      const newNode = new LLN(key, val);
      this.map.set(key, newNode);
      this.addToHead(newNode);
    }
    else {
      const newNode = new LLN(key, val);
      this.map.set(key, newNode);
      this.addToHead(newNode);
      this.size++;
    }
  }
  update (node) {
    if (this.head === node) return;
    if (this.tail === node) {
      this.removeFromTail();
      this.addToHead(node);
      return;
    }
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    node.next = null;
    node.prev = null;
    this.addToHead(node);
  }
  removeFromTail () {
    const oldTail = this.tail;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    oldTail.prev = null;
    return oldTail;
  }
  addToHead(node) {
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
}

function LLN (key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
}
