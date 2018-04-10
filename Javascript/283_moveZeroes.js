var moveZeroes = function(arr) {
  let trail = 0;

  // Find left most zero
  while (arr[trail] !== 0 && trail < arr.length) {
    trail++;
  }

  for (let i = trail + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      swap(arr, i, trail);
      trail++;
    }
  }
};

function swap (array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
