//https://leetcode.com/problems/allow-one-function-call/

let once = function(fn) {
    let call = false;
    if(call) return 'returns undefined without calling fn'

    console.log('fn', fn)
    return function(...args){
        console.log([...args])
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

onceFn(1,2,3); // 6
onceFn(2,3,6); // returns undefined without calling fn