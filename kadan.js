//https://leetcode.com/problems/maximum-subarray/

let maxSubArray = function(nums) {
    let currentMax = nums[0];
    let globalMax = nums[0];

    for(let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        globalMax = Math.max(currentMax, globalMax);
    }

    return globalMax;
};

maxSubArray([1, 1, 1, 1, 10, -1, -2, -5, -4]);
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);


//если нужно найти подмассив
function getMaximumSubarray(nums) {
    if (nums.length === 0) return [];

    let currentMax = nums[0];
    let globalMax = nums[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currentMax + nums[i]) {
            currentMax = nums[i];
            tempStart = i;
        } else {
            currentMax += nums[i];
        }

        if (currentMax > globalMax) {
            globalMax = currentMax;
            start = tempStart;
            end = i;
        }
    }

    return nums.slice(start, end + 1);
}

console.log(getMaximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Вывод: [4, -1, 2, 1]
