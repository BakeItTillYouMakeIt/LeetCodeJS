var nextGreatestLetter = function(letters, target) {
  // Edge Case
  let minTarget = '';

  for (let i = 0; i < letters.length; i++) {
    const curLetter = letters[i];

    if (curLetter > target) {
      if (minTarget === '') minTarget = curLetter;
      else if (curLetter < minTarget) minTarget = curLetter;
    }
  }

  if (minTarget === '') return letters[0];
  return minTarget;
};
