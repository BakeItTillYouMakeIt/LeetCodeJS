var minimumTotal = function(tri) {
  let startRow = tri.length - 2;

  for (let row = startRow; row >= 0; row--) {
      for (let col = 0; col < tri[row].length; col++) {
       // Figure out which child is smaller
       let minChild = Math.min(tri[row + 1][col], tri[row+ 1][col + 1]);
       tri[row][col] += minChild;
      }
  }
  // Return the root
  return tri[0][0];
};
