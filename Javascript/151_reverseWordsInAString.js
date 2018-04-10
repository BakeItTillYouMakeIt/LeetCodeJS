var reverseWords = function(str) {

  const wordsArr = str.split(' ').reverse();
  const wordsOnly = [];

  for (let i = wordsArr.length - 1; i >= 0; i--) {
    if (wordsArr[i] !== '') wordsOnly.push(wordsArr[i]);
  }

  return wordsOnly.reverse().join(' ');

}
