var hammingDistance = function(x, y) {

  const one = 1;
  let bits = 32;
  let count = 0;

  while (bits) {
    if ( (x & one) !== (y & one)) count++;
    x = x >> 1;
    y = y >> 1;
    bits--;
  }

  return count;
};
