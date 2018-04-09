var romanToInt = function(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  const edgeCases = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };

  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const normal = s[i];
    const edge = s.slice(i, i + 2);

    if (edge in edgeCases) {
      num += edgeCases[edge];
      i++;
    }
    else {
      num += romanMap[normal];
    }
  }

  return num;
};
