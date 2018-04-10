var minCost = function(costs) {
  // Edge Case
  if(!costs || !costs.length) return 0

  // Each row represents the house, each col is the price to paint it that color
  for (let row = 1; row < costs.length; row++) {

    // Painting red
    costs[row][0] += Math.min(costs[row-1][1], costs[row-1][2]);

    // Painting green
    costs[row][1] += Math.min(costs[row-1][0], costs[row-1][2]);

    // Painting blue
    costs[row][2] += Math.min(costs[row-1][0], costs[row-1][1]);
  }
  let lastRow = costs.length - 1;

  return Math.min(costs[lastRow][0], costs[lastRow][1], costs[lastRow][2]);
};
