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

	return result;
};

//should produce all 0's
console.log(reverseBits(0));
// macimum 32but int = 2^32 - 1 = 4294967295
console.log(reverseBits(4294967295));
// this SHOULD produce the same thing
console.log(reverseBits(1));

const maxNum = Math.pow(2, 32) - 1;
console.log(maxNum);
console.log(Math.floor(Math.pow(maxNum, 0.5)));

console.log(reverseBits(maxNum));
