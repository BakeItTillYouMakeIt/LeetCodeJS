function search(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    // Hit
    if (arr[mid] === target) {
      return mid;
    }
    else if (arr[lo] <= arr[mid]) {
      // Left half of array is correctly sorted
      if (target >= arr[lo] && target < arr[mid]) {
        hi = mid - 1;
      }
      else {
        lo = mid + 1;
      }
      continue;
    }

      // Right half of array is correctly sorted
      if (target <= arr[hi] && target > arr[mid]) {
        lo = mid + 1;
      }
      else {
        hi = mid - 1;
      }

  }
  return -1;
}
