var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(val) {
  if (this.minStack.length === 0) this.minStack.push(val);
    else if (this.minStack[this.minStack.length - 1] >= val) this.minStack.push(val);
    this.stack.push(val);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  let val = this.stack.pop();

  if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
  }
  return val;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
