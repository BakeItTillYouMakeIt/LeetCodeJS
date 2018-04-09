var permuteUnique = function(nums) {
  const res = [];
  const map = buildFreqTable(nums);
  permuteUniqueHelper(map, [], nums.length, res);
  return res;
};

function buildFreqTable(nums) {
  const hMap = {};

  for (let n of nums) {
    if (n in hMap) hMap[n] += 1;
    else hMap[n] = 1;
  }

  return hMap;
}

function permuteUniqueHelper(map, prev, remaining, res) {
  if (!remaining) {
    res.push(prev);
    return;
  }

  // Try remaining numbers
  for (let n in map) {

    let count = map[n];

    if (count > 0) {
      map[n] = count - 1;
      permuteUniqueHelper(map, prev.concat(+n), remaining - 1, res);
      map[n] = count;
    }
  }
}
