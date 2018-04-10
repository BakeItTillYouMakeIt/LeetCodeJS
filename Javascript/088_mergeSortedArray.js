var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let p = nums1.length -1;

  while (i >= 0 || j >= 0) {
    const num1 = i >= 0 ? nums1[i] : -Infinity;
    const num2 = j >= 0 ? nums2[j] : -Infinity;

    if (num1 >= num2) {
      nums1[p] = nums1[i];
      i--;
    }
    else {
      nums1[p] = nums2[j];
      j--;
    }
    p--;
  }
};
