//https://leetcode.com/problems/apply-transform-over-each-element-in-array/

let map = function(arr, fn) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    return newArray
};

map([1,2,3], function plusone(n) { return n + 1; })