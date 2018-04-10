var reverseString = function(s) {
  let lo = 0;
  let hi = s.length - 1;
  let charArr = s.split('');

  while (lo < hi) {
    swap(charArr, lo, hi);
    lo++;
    hi--;
  }

  return charArr.join('');
};

function swap (array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
