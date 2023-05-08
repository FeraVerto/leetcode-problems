//https://leetcode.com/problems/array-reduce-transformation/

let reduce = function(nums, fn, init) {
    let accum = init;

    for(let i = 0; i < nums.length; i++) {
        accum = fn(accum, nums[i]);
    }

    return accum;
};

reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100)