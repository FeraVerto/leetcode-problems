//https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150

let removeDuplicates = function(nums) {
    let pointLeft = 0;
    let pointRight = 1;
    let currentCount = 0;

    while(pointRight <= nums.length) {
        if(nums[pointLeft] === nums[pointRight]) {
            currentCount++;
            pointRight++;
        } else {
            nums.splice(pointLeft, currentCount);
            pointLeft++;
            currentCount = 0;
            pointRight = pointLeft + 1;
        }
    }

    return nums;
};

removeDuplicates([1,1,2]); //[0,1,2,3,4,_,_,_,_,_]
removeDuplicates([0,0,1,1,1,2,2,3,3,4]); //[0,1,2,3,4,_,_,_,_,_]

//
