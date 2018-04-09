/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


** First Solution ** 
Time: O(n)
Space: O(n)

We use an object to keep track of what numbers we've seen and then at the end iterate over the object to see what number was only seen once.
*/

const singleNumber = (nums) => {
	const numsSeen = {};
	for(let i = 0; i < nums.length; i++){
		const currentNum = nums[i];
		if(!numsSeen[currentNum]){
			numsSeen[currentNum] = 1;
		} else {
			numsSeen[currentNum]++;
		}
	}

	for (let key in numsSeen){
		if(numsSeen[key] === 1)
			return +key;
	}
}



/*

** Second Solution **

Time: O(n)
Space: O(1)

Here we make use of XOR. Why XOR? because this allows doubles to cancel out. 
When you XOR a number by itself it become 0.
4 ^ 3 ^ 3 ^ 4 = (4^4) ^ (3^3) = (0) ^ (0) = 0

Now consider these numbers: [1, 8, 9, 7, 1, 9, 7]
If we XOR them we get:
1 ^ 8 ^ 9 ^ 7 ^ 1 ^ 9 ^ 7 = (1 ^ 1)  ^ (9 ^ 9) ^ (7 ^ 7) ^ 8 = (0) ^ (0) ^ (0) ^ 8 = 9

8 is the non repeated number

 */

const singleNumber = (nums) => {
	let result = 0;
	for(let i = 0; i <= nums.length; i++){
		const currentNum = nums[i];
		result = result ^ currentNum;
	}
	return result;
}