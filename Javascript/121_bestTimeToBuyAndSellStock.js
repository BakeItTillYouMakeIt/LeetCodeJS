var maxProfit = function(prices) {
  // Initialize min price to the first price
  let min = prices[0];

  // Initialzie max profit to 0
  let maxP = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    min = Math.min(min, price);
    maxP = Math.max(maxP, price - min);
  }

  return maxP;
};
