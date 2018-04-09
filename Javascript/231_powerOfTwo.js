/*

Time: O(1)
Space: O(1)

*/

const isPowerOfTwo = (num) => {
  return (num > 0 && !(num & (num - 1)))
}
