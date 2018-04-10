var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  const queue = [beginWord];
  let count = 1;
  let levelCount = 1


  while (queue.length) {

    let nextLevelCount = 0;

    while (levelCount) {
      levelCount--;
      let curWord = queue.shift();
      for (let word of wordSet.values()) {
        if (isTransformation(curWord, word)) {
          if (word === endWord) return count + 1;
          queue.push(word);
          wordSet.delete(word);
          nextLevelCount++;
        }
      }
    }
    count++;
    levelCount = nextLevelCount;
  }

  return 0;

};

function isTransformation (word1, word2) {
  if (word1.length !== word2.length || word1 === word2) return false;
  let count = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) count++;
    if (count > 1) return false;
  }

  return true;
}
