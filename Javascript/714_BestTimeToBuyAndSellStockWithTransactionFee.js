const maxProfit = (prices, fee) => {
  if (prices.length <= 1) return 0;
  let buy = new Array(prices.length).fill(0)
  let hold = new Array(prices.length).fill(0)
  let skip = new Array(prices.length).fill(0)
  let sell = new Array(prices.length).fill(0)
  // the moment we buy a stock, our balance should decrease
  buy[0] = 0 - prices[0];
  // assume if we have stock in the first day, we are still in deficit
  hold[0] = 0 - prices[0];
  for (let i = 1; i < prices.length; i++) {
    // We can only buy today if we sold stock
    // or skipped with empty portfolio yesterday
    buy[i] = Math.max(skip[i - 1], sell[i - 1]) - prices[i];
    // Can only hold if we bought or already holding stock yesterday
    hold[i] = Math.max(buy[i - 1], hold[i - 1]);
    // Can skip only if we skipped, or sold stock yesterday
    skip[i] = Math.max(skip[i - 1], sell[i - 1]);
    // Can sell only if we bought, or held stock yesterday
    sell[i] = Math.max(buy[i - 1], hold[i - 1]) + prices[i] - fee;
  }
  // Get the max of all the 4 actions on the last day.
  let max = Math.max(buy[prices.length - 1], hold[prices.length - 1]);
  max = Math.max(skip[prices.length - 1], max);
  max = Math.max(sell[prices.length - 1], max);
  return Math.max(max, 0);
}
