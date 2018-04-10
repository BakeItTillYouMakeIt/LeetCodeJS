var boundaryOfBinaryTree = function(root) {
  // Edge Case
  if (!root) return [];

  const output = [root.val];
  printPerimeterLeft(root.left, false, output);
  printPerimeterRight(root.right, false, output);
  return output;
};

function printPerimeterLeft(root, interiorFlag, output) {
  // Edge Case
  if (!root) return;

  // Base Case, leaf
  if (!root.left && !root.right) {
    output.push(root.val);
    return;
  }

  if (!interiorFlag) output.push(root.val);

  // Go left and keep the flag we passed in
  printPerimeterLeft(root.left, interiorFlag, output);

  // If the left subtree doesnt exist and the interior flag is false, we need to pass in the interior flag we got
  if (!root.left && !interiorFlag) {
    printPerimeterLeft(root.right, interiorFlag, output)
  }
  else {
    // Go right set flag to true
    printPerimeterLeft(root.right, true, output);
  }
}

function printPerimeterRight(root, interiorFlag, output) {
  // Edge Case
  if (!root) return;

  // Base Case, leaf
  if (!root.left && !root.right) {
    output.push(root.val);
    return;
  }
  // If the right subtree doesnt exist and the interior flag is false, we need to pass in the interior flag we got
  if (!root.right && !interiorFlag) {
    printPerimeterRight(root.left, interiorFlag, output);
  }
  else {
    // Go left and set flag to true
    printPerimeterRight(root.left, true, output);
  }

  // Go right and keep the flag we passed in
  printPerimeterRight(root.right, interiorFlag, output);

  if (!interiorFlag) output.push(root.val);
}
