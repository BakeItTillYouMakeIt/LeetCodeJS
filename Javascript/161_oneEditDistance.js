var isOneEditDistance = function(s, t) {
  if (Math.abs(s.length - t.length) > 1) return false;

  let count = 0;

  let i = 0;
  let j = 0;

  while (i < s.length || j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    }
    else if (s[i+1] === t[j]) {
      i++;
      count++;
    }
    else if (s[i] === t[j+1]) {
      j++;
      count++;
    }
    else {
      i++;
      j++;
      count++
    }
    if (count > 1) return false;
  }

  return count === 1;
};
