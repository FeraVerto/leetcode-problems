//https://leetcode.com/problems/valid-parentheses/

let isValid = function(s) {
    let map = new Map();
    map.set("(", ")");
    map.set("{", "}");
    map.set("[", "]");
    let stack = [];
    let lasElementOfStack = stack[stack.length - 1];

    for(let i = 0; i < s.length; i++) {
        if(map.has(s.charAt(i))){
            stack.push(s.charAt(i))
        } else {
             if(lasElementOfStack === s.charAt(i)) {
                stack.pop()
             } else {
                return false
             }
        }
    }

    return !stack.length
};

isValid("()[]{}");

//задачка на стек