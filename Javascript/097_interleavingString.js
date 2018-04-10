var isInterleave = function(s1, s2, s3, memo = {}) {
  if (s1.length + s2.length !== s3.length) return false;
  let str = s1 + ',' + s2 + ',' + s3;

  if (str in memo) return memo[str];

  let p1 = 0
  let p2 = 0
  let p3 = 0;

  while (p1 < s1.length || p2 < s2.length) {
    const l1 = s1[p1] ? s1[p1] : null;
    const l2 = s2[p2] ? s2[p2] : null;
    const l3 = s3[p3];

    if (l1 === l2 && l2 === l3) {
      let res = isInterleave(s1.slice(p1 + 1), s2.slice(p2), s3.slice(p3 + 1), memo) || isInterleave(s1.slice(p1), s2.slice(p2 + 1), s3.slice(p3 + 1), memo);
      memo[str] = res;
      return res;
    }
    else if (l1 === l3) {
      p1++;
      p3++;
    }
    else if (l2 === l3) {
      p2++;
      p3++;
    }
    else {
      memo[str] = false;
      return false;
    }
  }
  memo[str] = true;
  return true;
};
