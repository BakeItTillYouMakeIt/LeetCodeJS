var addBinary = function(a, b) {
  const sums = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0 || carry) {
    const bitA = a[i] !== undefined ? +a[i] : 0;
    const bitB = b[j] !== undefined ? +b[j] : 0;
    const sum = bitA + bitB + carry;

    if (sum <= 1) {
      sums.unshift(sum);
      carry = 0;
    }
    else if (sum === 2) {
      sums.unshift(0);
      carry = 1;
    }
    else {
      sums.unshift(1);
      carry = 1;
    }
    i--;
    j--;
  }
  return sums.join('')
};
