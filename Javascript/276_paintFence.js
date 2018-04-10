var numWays = function(n, k) {
  if (n === 0) return 0;
  if (n === 1) return k;

  const diffColor = [0, k, k*(k-1)];
  const sameColor = [0, k, k];

  for (let i = 3; i <= n; i++) {
      diffColor[i] = (k-1)*(diffColor[i-1] + sameColor[i-1]);
      sameColor[i] = diffColor[i-1];
  }

  return diffColor[n] + sameColor[n];
};
