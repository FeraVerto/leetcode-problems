//https://leetcode.com/problems/promise-time-limit/

let timeLimit = function(fn, t) {
	return async function(...args) {
        let fnResult = fn(...args);
        let time = new Promise((_, rej) => {
            setTimeout(() => {
                rej("Time Limit Exceeded");
            }, t)
        })

        return Promise.race([fnResult, time])
    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

//Метод race() — это один из статических методов объекта Promise. 
//Его используют, чтобы запустить несколько промисов и дождаться того, который выполнится быстрее.