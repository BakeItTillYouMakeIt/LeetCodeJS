var MaxStack = function() {
  this.stack = [];
  this.maxStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
  let max = this.maxStack.length === 0 ? x : this.maxStack[this.maxStack.length - 1];
  this.maxStack.push(max > x ? max : x);
  this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
  this.maxStack.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
  return this.maxStack[this.maxStack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
  let max = this.peekMax();
  let buffer = [];
  while (this.top() != max) buffer.push(this.pop());
  this.pop();
  while (buffer.length) this.push(buffer.pop());
  return max;
};
