function wordBreak (s, dict) {
  const dictSet = new Set(dict);
  return wordSplitH(s, dictSet);
}

function wordSplitH (s, dictS, memo = {}) {
  if (s.length === 0) {
    return [""];
  }
  if (s in memo) return memo[s];

  const sols = [];

  for (let i = 1; i <= s.length; i++) {
    const sub = s.slice(0, i);

    if (dictS.has(sub)) {
      const remaining = wordSplitH(s.slice(i), dictS, memo);
        for (let str of remaining) {
          if (str === "") sols.push(sub);
          else sols.push(sub + " " + str);
        }
      }
  }
  memo[s] = sols;
  return sols;
}
