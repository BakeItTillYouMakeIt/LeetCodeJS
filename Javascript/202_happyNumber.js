
//Time Complexity - O(n), space Complexity - O(n)
var isHappy = function (n) {
  const hashMap = {}
  n = n.toString()
  while (n !== '1') {
    if (hashMap[n]) return false
    hashMap[n] = true
    let sum = 0
    for (const num of n) sum += Math.pow(+num, 2)
    n = sum.toString()
  }
  return true
};

//Recursive Solution
//Time Complexity - O(n), space Complexity - O(n)

var isHappy = (n, hashMap = {}) => {
  n = n.toString()
  if (n !== '1') {
    if (hashMap[n]) return false
    hashMap[n] = true
    let sum = 0
    for (const num of n) sum += Math.pow(+num, 2)
    n = sum.toString()
    return isHappy(n, hashMap)
  }
  return true
};
