var findUnsortedSubarray = function(arr) {
  let i = 0;
  while (arr[i] <= arr[i + 1] && i < arr.length) i++;

  if (i === arr.length - 1) return 0;

  let j = arr.length - 1;
  while (arr[j] >= arr[j - 1]) j--;

  let min = Infinity;
  let max = -Infinity;

  for (let k = i; k <= j; k++) {
      min = Math.min(min, arr[k]);
      max = Math.max(max, arr[k]);
  }

  let shifts = true;

  while (shifts) {
      shifts = false
      if (max > arr[j]) {
          j++;
          shifts = true;
      }
      if (min < arr[i]) {
          i--;
          shifts = true;
      }
  }
  return j - i - 1;
};
