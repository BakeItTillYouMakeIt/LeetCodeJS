var twoSum = function(numbers, target) {
  let lo = 0;
  let hi = numbers.length - 1;

  while (lo < hi) {
    const sum = numbers[lo] + numbers[hi];
    if (sum === target) return [lo+1, hi+1];
    else if (sum < target) lo++;
    else hi--;
  }
};
