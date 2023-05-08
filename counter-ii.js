//https://leetcode.com/problems/counter-ii/

let createCounter = function(init) {
    return {
        num: init,
        increment () {
            this.num = this.num + 1
            return this.num
        },
        reset () {
            this.num = init
            return this.num
        }, 
        decrement () {
            this.num = this.num - 1
            return this.num
        }
    }
};

const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4