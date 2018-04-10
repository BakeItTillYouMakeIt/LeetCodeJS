var MovingAverage = function(size) {
  this.size = size;
  this.nums = [];
  this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  if (this.nums.length === this.size) {
    this.sum -= this.nums.shift();
  }
  this.nums.push(val);
  this.sum += val;

  return this.sum/this.nums.length;
};
