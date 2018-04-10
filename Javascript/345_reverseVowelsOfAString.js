var reverseVowels = function(s) {
  charArr = s.split('');

  const vowels = {a: true, e: true, i: true, o: true, u: true, A: true, E: true, I: true, O: true, U: true};

  let i = 0;
  let j = s.length - 1;

  while (i < j) {

      // Find left vowel
      while (!vowels[charArr[i]] && i < charArr.length ) i++;
      // Find right vowel
      while(!vowels[charArr[j]] && j >= 0) j--;

      if (i >= j) break;

      swap(charArr, i , j);
      i++;
      j--;
  }
  return charArr.join('');
};

function swap (array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
