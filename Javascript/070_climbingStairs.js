var climbStairs = function(num, memo = {}) {

  if (num === 0) return 1;
  if (num < 0) return 0;
  if (memo[num]) return memo[num];

  memo[num] = climbStairs(num - 1, memo) + climbStairs(num - 2, memo);

  return memo[num];
}
