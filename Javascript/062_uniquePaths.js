var uniquePaths = function(m, n) {
  return mark(m-1, n-1);
};


function mark(r, c, memo = {}) {
 // Out of bounds
 if (r < 0 || c < 0) return 0;

 // Success
 if (r === 0 && c === 0) return 1;

 const str = r + ',' + c;
 if (str in memo) return memo[str];

 let count = 0;

 // Mark top
 count += mark(r - 1, c, memo);

 // Mark left
 count += mark(r, c - 1, memo);

 memo[str] = count;
 return count;
}
