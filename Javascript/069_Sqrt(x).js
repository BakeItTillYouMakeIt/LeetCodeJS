
//Utilizes binary search
//Solution only valid for truncated result
//Removing 'Math.floor' from line 13 will return inaccuate result for square root

const mySqrt = number => {
  let lo = 0
  let hi = number;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (mid * mid > number) hi = mid - 1;
    else lo = mid + 1;
  }
  return Math.floor((lo + hi) / 2);
}

// The Babylonian Method
// http://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method
// @param n - the number to compute the square root of
// @param g - the best guess so far (can omit from initial call)
// Removing 'Math.floor()' from line 34 fails these test specs (returns non truncated, but accurate, square root result)

function mySqrt(n, g) {
  //edge cases
  if (!n || n === 1) return n
  if (!g) {
    // Take an initial guess at the square root
    g = n / 2;
  }
  var d = n / g;              // Divide our guess into the number
  var ng = (d + g) / 2;     // Use average of g and d as our new guess
  //base case
  if (g == ng) {
    // The new guess is the same as the old guess; further guesses
    // can get no more accurate so we return this guess
    return Math.floor(g);
  }
  // Recursively solve for closer and closer approximations of the square root
  return mySqrt(n, ng);
}
