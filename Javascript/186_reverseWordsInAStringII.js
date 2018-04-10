var reverseWords = function(str) {
  // Edge Case
  if (str.length === 0) return;

  // Reverse the string once
  str = str.reverse();

  let start = 0;
  let end = 0;

  while (end <= str.length) {
    if (str[end] === ' ' || end === str.length) {
      reverseWordsHelper(str, start, end - 1);
      start = end + 1;
    }
    end++;
  }

};

function reverseWordsHelper (str, startIdx, endIdx) {

  while (startIdx < endIdx) {
    swap(str, startIdx, endIdx);
    startIdx++;
    endIdx--;
  }

}

function swap (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
