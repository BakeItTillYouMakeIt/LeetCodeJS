var threeSum = (nums) => {
    let finalArr = [],
        trackObj = {};
    nums = nums.sort((a,b) => a-b)
    for(let i = 0; i < nums.length; i++) {
       let leftPos = 0,
           rightPos = nums.length -1,
           secondPos = i+1;
      while(leftPos <= rightPos) {    
          let left = nums[leftPos],
            right = nums[rightPos],
            second = nums[secondPos];
        
          let sum = left + right + second;
          if (sum === 0) {
            let sortedSum = [left, second, right].sort((a,b) => a-b);
            if(!trackObj[sortedSum.toString()] && (leftPos !== rightPos && rightPos !== secondPos && leftPos !== secondPos)) {
              trackObj[sortedSum.toString()] = true
              finalArr.push(sortedSum)
            }
           while(nums[leftPos] === nums[leftPos+1]) {
               leftPos++
           }
              leftPos++
          } else {
            if (sum > 0) rightPos --
            else leftPos++
          }
         
      }
    }
    return finalArr
};