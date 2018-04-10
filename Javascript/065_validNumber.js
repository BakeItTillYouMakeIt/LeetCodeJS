var isNumber = function(s) {
  s = s.trim();
  let decimalCount = 0;
  let eCount = 0;
  let signCount = 0;

  let start = 0;
  if (s[start] === '+' || s[start] === '-') start++;

  // Check for bullshit in beginning or end
  if (s[start] === 'e' ||
      s[s.length - 1] === 'e' ||
      s.slice(start, start + 2) === '.e' ||
      (s[start] === '.' && s.length - start === 1) ||
      !s.length ||
      s[s.length - 1] === '+' ||
      s[s.length - 1] === '-') return false;


  for (let i = start; i < s.length; i++) {
    const c = s[i];

    if (s.slice(i, i+2) === 'e.') return false;
    else if (c === '.' && eCount > 0) return false;
    else if (eCount && (c === '-' || c === '+') ) signCount++;
    else if (c === '.') decimalCount++;
    else if (c === 'e') eCount++;
    else if (c < '0' || c > '9') return false;

    if (decimalCount > 1 || eCount > 1 || signCount > 1) return false;
  }

  return true;
};
