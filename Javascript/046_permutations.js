var permute = function(nums, perms = [[nums.shift()]]) {
  if (!nums || !nums.length) return perms;

  let firstVal = nums.shift();
  let newPerms = [];

  for (let i = 0; i < perms.length; i++) {
    for (let j = 0; j <= perms[i].length; j++) {
      let perm = insertAt(perms[i], j, firstVal);
      newPerms.push(perm);
    }
  }

  return permute(nums, newPerms);
};

function insertAt(arr, idx, val) {
  let firstHalf = arr.slice(0, idx);
  let secondHalf = arr.slice(idx);

  firstHalf.push(val);

  return firstHalf.concat(secondHalf);
}
