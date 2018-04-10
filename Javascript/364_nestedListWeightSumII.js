
function depthSumInverse (nestedList) {
  const maxDepth = getMaxDepth(nestedList);

  return depthSumInverseHelper(nestedList, maxDepth);
}

function getMaxDepth(nestedList) {
  let depth = 1;

  for (let nI of nestedList) {
    if (!nI.isInteger()) {
      depth = Math.max(depth, getMaxDepth(nI.getList()) + 1);
    }
  }
  return depth;
}

function depthSumInverseHelper(nestedList, depth) {
  let curSum = 0;
  let depthSum = 0;

  for (let nI of nestedList) {
    if (nI.isInteger()) curSum += nI.getInteger();
    else depthSum += depthSumInverseHelper(nI.getList(), depth - 1);
  }

  return curSum * depth + depthSum;
}
