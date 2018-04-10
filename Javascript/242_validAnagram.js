var isAnagram = function(s, t) {
  const hMap = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in hMap) hMap[s[i]] += 1;
    else hMap[s[i]] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] in hMap) hMap[t[i]] -= 1;
    else return false;
  }


  for (let key in hMap) {
    if (hMap[key] !== 0) return false;
  }

  return true;
};
