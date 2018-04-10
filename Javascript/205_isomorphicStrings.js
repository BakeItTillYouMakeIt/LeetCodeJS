var isIsomorphic = function(s, t) {
  // Edge Cases
  if (s.length !== t.length) return false;

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < s.length; i++) {
    const c1 = s[i];
    const c2 = t[i];

    if (!map1[c1]) map1[c1] = c2;
    else if (map1[c1] !== c2) return false;

    if (!map2[c2]) map2[c2] = c1;
    else if (map2[c2] !== c1) return false;
  }

  return true;
};
