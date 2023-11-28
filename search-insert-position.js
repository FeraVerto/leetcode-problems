//https://leetcode.com/problems/search-insert-position/

let searchInsert = function(nums, target) {
    
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    
    while(leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
       
        if(nums[midIndex] === target) return midIndex;
        
        if(nums[midIndex] < target) {
            leftIndex = midIndex + 1;
        }

        if(nums[midIndex] > target) {
            rightIndex = midIndex - 1;
        }
    }

    return leftIndex;
};


searchInsert([1,3,5,6], 7);
searchInsert([1,3,5,6], 1);