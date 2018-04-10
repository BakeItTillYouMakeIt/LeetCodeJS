var judgeSquareSum = function(c) {
  let lo = 0;
  let hi = Math.floor(Math.sqrt(c));

  while (lo <= hi) {
    let val = lo * lo + hi * hi;
    if (val < c) lo++;
    else if (val > c) hi--;
    else return true;
  }

  return false;
};
