//https://leetcode.com/problems/counter/
//задача на замыкание

// нечитаемое
// let createCounter = function(n) {
//     n -= 1
//     return function() {
//         return n += 1
//     };
// };

let createCounter = function(n) {
    let count = n;
    return function() {
        let result = count;
        count++;
        return result;
    };
};

const counter = createCounter(10)
counter()