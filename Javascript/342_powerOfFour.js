
/*
Time:O(logn)
Space:O(1)

as long as the two rightmost bits are zero we keep shifting them off
at the end we check to make sure it's 1
*/
const powerOfFour = (num) => {
  while(num && !(num & 3)){
    num = num >> 2;
  }
  return (num === 1);
}

