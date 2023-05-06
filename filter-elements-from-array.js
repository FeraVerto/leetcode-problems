//https://leetcode.com/problems/filter-elements-from-array/

let filter = function(arr, fn) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)){
            newArr.push(arr[i]);
        }
    }

    return newArr
};

filter([0,10,20,30], function greaterThan10(n) { return n > 10; })