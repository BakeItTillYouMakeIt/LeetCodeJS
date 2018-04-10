var depthSum = function(nestedList, level = 1) {
  let curSum = 0;
  let depthSumTotal = 0;

  for (let i = 0; i < nestedList.length; i++) {
    const curEle = nestedList[i];

    if (curEle.isInteger()) {
      curSum += curEle.getInteger();
    }
    else {
      depthSumTotal += depthSum(curEle.getList(), level + 1);
    }
  }

  return curSum * level + depthSumTotal;
};
