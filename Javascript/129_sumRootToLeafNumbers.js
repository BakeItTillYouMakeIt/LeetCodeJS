var sumNumbers = function(root) {

  const pathSums = [0];
  sumNumbersHelper(root, pathSums);
  return pathSums[0];
};

function sumNumbersHelper(root, pathSums, curSum = 0) {
  // Edge case
  if (!root) return;

  // Update sum
  let newSum = curSum * 10 + root.val;

  // if we hit a leaf node
  if (!root.left && !root.right) {
    pathSums[0] += newSum;
    return;
  }

  // Go left
  sumNumbersHelper(root.left, pathSums, newSum);

  // Go right
  sumNumbersHelper(root.right, pathSums, newSum);
}
