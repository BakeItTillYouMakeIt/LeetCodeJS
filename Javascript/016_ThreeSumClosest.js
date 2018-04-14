var threeSumClosest = function(nums, target) {
    
        nums = nums.sort((a,b) => a-b)
        let sumArr = [],
            final = [];
        for(let i = 0; i<nums.length-1; i++) {
            let leftPos = 0,
                secondPos = i+1,
                rightPos = nums.length-1;
            while(leftPos < rightPos) {
                let left = nums[leftPos],
                    right = nums[rightPos],
                    second = nums[secondPos],
                    sum = left+right+second;
                if(sum !== target) {
                    if(leftPos !== rightPos && leftPos !== secondPos && secondPos !== rightPos) sumArr.push(sum)
                    sum > target ? rightPos-- : leftPos++
                } else {
                     if(leftPos !== rightPos && leftPos !== secondPos && secondPos !== rightPos) sumArr.push(sum)
                    leftPos++
                    rightPos--
                }
            }
        }
        final.push(sumArr[0])
        for(let i = 0; i<sumArr.length; i++) {
       
            let last = final[final.length-1]
            if(Math.abs(last - target) > Math.abs(sumArr[i] - target)) {
                final[final.length-1] = sumArr[i]
            }
        }
        return final[0]
    };