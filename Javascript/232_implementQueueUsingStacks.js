var MyQueue = function() {
  this.stackA = [];
  this.stackB = [];
};

/**
* Push element x to the back of queue.
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(val) {
   if (this.stackA.length || this.empty() ) {
          this.stackA.push(val);
      }
  else {
          while(this.stackB.length) {
              this.stackA.push(this.stackB.pop());
          }
          this.stackA.push(val);
      }
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
   if (this.stackA.length) {
          while(this.stackA.length) {
              this.stackB.push(this.stackA.pop());
          }
          return this.stackB.pop();
      } else {
          return this.stackB.pop();
      }
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
   if (this.stackA.length) {
          while(this.stackA.length) {
              this.stackB.push(this.stackA.pop());
          }
          return this.stackB[this.stackB.length - 1];
      } else {
          return this.stackB[this.stackB.length - 1];
      }
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.stackA.length === 0 && this.stackB.length === 0;
};
