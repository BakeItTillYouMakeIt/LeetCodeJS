function subsets (nums, subsetsArr = [[]]) {
  // Base Case
  if (nums.length === 0) return subsetsArr;

  // Take element off nums
  const ele = nums.shift();

  // Add it to every element in the subsetsArr
  let len = subsetsArr.length;

  for (let i = 0; i < len; i++) {
    const copy = subsetsArr[i].slice();
    // add ele to copy
    copy.push(ele);
    subsetsArr.push(copy);
  }

  subsets(nums, subsetsArr);
  return subsetsArr;
}
