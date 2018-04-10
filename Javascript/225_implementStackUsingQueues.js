var MyStack = function() {
  this.qA = [];
  this.qB = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(val) {
  if (this.qA.length) this.qA.unshift(val);
  else this.qB.unshift(val);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (this.qA.length) {
    while(this.qA.length !== 1) this.qB.unshift(this.qA.pop());
    return this.qA.pop();
  }
  else if (this.qB.length) {
    while(this.qB.length !== 1) this.qA.unshift(this.qB.pop());
    return this.qB.pop();
  }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  if (this.qA.length) return this.qA[0];
  return this.qB[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.qA.length && !this.qB.length;
};
