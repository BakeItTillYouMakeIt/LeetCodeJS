/*
**First Solution**
Time: O(n)
Space: O(n)

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
    for(let key in numsSeen){
        if(numsSeen[key] == 1)
            return key;
    }
};




/*
**Second Solution**
Time: O(n)
Space: O(1)

*/

const singleNumber = (nums) => {
	let one = 0;
	let two = 0;
	for(let i = 0; i < nums.length; i++){
		const currentNum = nums[i];
		const new_one = (~currentNum & one) | (currentNum & ~one & ~two)
		const new_two = (~currentNum & two) | (currentNum & one);
		one = new_one;
		two = new_two;
	}

	return one
};