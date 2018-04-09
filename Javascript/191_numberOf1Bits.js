/*
  In other languages we allocate 32 bits to an interger. This is why we what
  Time: O(logn)
  Space: O(1)
*/

const numberofOnes = (num) => {
  let count = 0;
  while(num){
    count++;
    num = (num) & (num - 1);
  }
  return count;
}
