var groupAnagrams = function(strs) {
  const anagramMap = {};

  for (let str of strs) {
    const freqStr = (getFreqString(str));

    if (freqStr in anagramMap) anagramMap[freqStr].push(str);
    else anagramMap[freqStr] = [str];
  }
  const sol = [];
  for (let key in anagramMap) {
    sol.push(anagramMap[key]);
  }

  return sol;
};

function getFreqString (str) {
  const freqArr = new Array(26).fill(0);

  for (let l of str) {
    let idx = l.charCodeAt(0) - 'a'.charCodeAt(0);
    freqArr[idx] += 1;
  }

  return freqArr.join(',');
}
