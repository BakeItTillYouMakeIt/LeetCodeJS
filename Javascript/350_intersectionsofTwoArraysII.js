var intersect = function(nums1, nums2) {
  const hMap = {};
  const intersections = [];

  for (let i = 0; i < nums1.length; i++) {
    if (hMap[nums1[i]]) hMap[nums1[i]] += 1;
    else hMap[nums1[i]] = 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (hMap[nums2[i]]) {
      intersections.push(nums2[i])
      hMap[nums2[i]] -= 1;
    }
  }

  return intersections;
};
