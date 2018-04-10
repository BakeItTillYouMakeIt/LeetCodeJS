var isPerfectSquare = function(num) {
  let lo = 0;
  let hi = num;
  let mid;
  let sqr;

  while (lo < hi) {
    mid = (lo + hi)/2;
    sqr = mid * mid;
    if (Math.abs(sqr-num) < 1) break;

    else if (sqr < num) lo = mid;
    else hi = mid;
  }
  let rounded = Math.round(mid);

  if (rounded * rounded === num) return true;
  return false;
};
