var getPermutation = function(n, k) {
  const set = [];
  for (let i = 1; i <= n; i++) {
    set.push(i);
  }
  return findKthPerm(set, k).join('');
};

function findKthPerm (elements, k, kthPerm = []) {
  if (!elements || !elements.length) return kthPerm;

  let n = elements.length;
  let factNMinus1 = fact(n-1);
  let startIdx = Math.floor((k-1)/factNMinus1);
  let newK = k - factNMinus1 * startIdx;

  let startEle = elements.splice(startIdx, 1)[0];
  kthPerm.push(startEle);

  return findKthPerm(elements, newK, kthPerm)
}

function fact (n) {
  let factorial = 1;
  while (n > 1) {
    factorial *= n;
    n--;
  }

  return factorial;
}
