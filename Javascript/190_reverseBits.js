/*

In other languages we allocate 32 bits for an integer, in JS this is not the case.
we allocate just the number that we need.


Time: O(logn)
Space: O(1)
 */


const reverseBits = (num) => {
  if (!num) return num;
	let result = 0;
	let count = 32;
	while (--count){
		result <<= 1; // bit shift over by 1
		result |= num & 1; // newly shifted bit is n's leftmost bit
		num >>= 1;
	}

	return result >>> 0;
};
