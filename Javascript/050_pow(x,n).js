function powPositive(x, n) {
  // Edge Case
  if (n === 0) return 1;
  // Base Case
  if (n === 1) return x;

  let p = powPositive(x, Math.floor(n/2));
  if (n % 2 === 0) return p * p;
  return x * p * p;
}

function myPow (x, n) {
  if (n >= 0) return powPositive(x, n);
  // n is negative
  let positiveValue = powPositive(x, Math.abs(n));

  return 1 / positiveValue;
}
