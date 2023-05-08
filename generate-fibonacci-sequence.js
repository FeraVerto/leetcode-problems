//https://leetcode.com/problems/generate-fibonacci-sequence/

//говно, а не решение, не смотря на то, что работает
let fibGenerator = function*() {

    let arr = [0, 1]

    if(arr.length <= 2) {
        yield 0
        yield 1
    }

    for(let i = 0; i < 10000; i++) {
        yield arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
};

//а так лучше, так как занято меньше памяти и лаконичнее
//нам ведь не нужно хранить целый огромный массив чисел!

// const fibGenerator = function*() {
//     let [a, b] = [0, 1]
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b]
//     }
// }

const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1