var numDecodings = function(str) {
  // Edge Case
  if (str.length === 0) return 0;
  // Initialze array for dynamic programming
  const dp = new Array(str.length + 1).fill(0);

  // Set initial conditions
  dp[0] = 1;
  if (+str[0]) dp[1] = 1;

  for (let i = 1; i < str.length; i++) {
    const num1 = +str[i];
    const num2 = +str.slice(i-1, i+1);

    if (num1) {
      dp[i+1] += dp[i];
    }

    if (num2 >= 10 && num2 <= 26) {
      dp[i+1] += dp[i-1];
    }
  }
  return dp[str.length];

};
