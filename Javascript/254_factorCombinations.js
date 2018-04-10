function getFactors(n, startNum = 2, curProduct = 1, curComb = [], sols = []) {
  // Edge Case
  if (n <= 1) return [];
  if (startNum > Math.floor(Math.sqrt(n))) return [];

  let half = Math.floor(n/2)

  for (let num = startNum; num <= half; num++) {
      if (num * curProduct > n) break;
      else if (num * curProduct === n) {
          sols.push(curComb.concat(num));
          return;
      }
      else if (n % num === 0) {
          getFactors(n, num, curProduct * num, curComb.concat(num), sols);
      }
  }

  return sols;
}
