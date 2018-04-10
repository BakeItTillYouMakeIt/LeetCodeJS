
/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.stack = [];
  this.pushAll(root);
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length !== 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  const node = this.stack.pop();
  this.pushAll(node.right);
  return node.val;
};

BSTIterator.prototype.pushAll = function(node) {
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
