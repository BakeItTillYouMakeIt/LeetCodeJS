var findKthLargest = function(array, k, idx = array.length - k, lo = 0, hi = array.length - 1) {
  // Edge Cases
  if (lo === hi) return array[lo];
  else if (lo > hi) return null;

  // Get pivot
  let p = hi;
  hi--;

  let initialLo = 0;

  while (lo <= hi) {
    // Move lo to a value > pivot
    while (lo < array.length && array[lo] < array[p]) lo++;

    // Move hi to a value < pivot
    while (hi >= 0 && array[hi] >= array[p]) hi--;

    if (lo <= hi) {
      swap(array, lo, hi);
      lo++;
      hi--;
    }
  }

  // Check if lo, which is where we will swap p to, is at array.length - k;
  if (lo === idx) return array[p];

  // Swap
  swap(array, lo, p)

  if (idx > lo) return findKthLargest(array, k, idx, lo + 1, p);
  else return findKthLargest(array, k, idx, initialLo, hi);

}

function swap (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
