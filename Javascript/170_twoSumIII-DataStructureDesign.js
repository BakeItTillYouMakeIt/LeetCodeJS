var TwoSum = function() {
  this.arr = [];
  this.map = {};
};

/**
* Add the number to an internal data structure..
* @param {number} number
* @return {void}
*/
// O(1)
TwoSum.prototype.add = function(number) {
  this.arr.push(number);
  if (this.map[number]) {
      this.map[number] += 1;
  }
  else {
      this.map[number] = 1;
  }
};

/**
* Find if there exists any pair of numbers which sum is equal to the value.
* @param {number} value
* @return {boolean}
*/
// O(N)
TwoSum.prototype.find = function(value) {
  for (let i = 0; i < this.arr.length; i++) {
      const num = this.arr[i];
      // Special case where we need to consider a duplicate
      if (value - num === num) {
          if (this.map[num] >= 2) return true;
      }
      // Not a duplicate value
      else if (this.map[value - num]) return true;
  }

  return false;
};
