var maxArea = function(height) {
  let lo = 0;
  let hi = height.length - 1;
  let max = 0;

  while (lo < hi) {
    let w = hi - lo;
    let h = Math.min(height[lo], height[hi]);
    max = Math.max(w * h, max);

    if (height[lo] < height[hi]) lo++;
    else hi--;
  }

  return max;
};
