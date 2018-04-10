var change = function(amount, denoms) {
  const combs = new Array(amount + 1).fill(0);
  combs[0] = 1;

  for (denom of denoms) {
    for (let i = denom; i < combs.length; i++) {
      combs[i] += combs[i - denom];
    }
  }

  return combs[amount];
};
