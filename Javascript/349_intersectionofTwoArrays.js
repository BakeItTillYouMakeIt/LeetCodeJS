var intersection = function(nums1, nums2) {
  let hSet = new Set();

  // Add elements from nums1 to hSet
  for (let i = 0; i < nums1.length; i++) {
    hSet.add(nums1[i]);
  }
  let intersect = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (hSet.has(nums2[i])) intersect.add(nums2[i]);
  }

  return Array.from(intersect);
};
