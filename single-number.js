//https://leetcode.com/problems/single-number/

//хрень!
let singleNumber = function(nums) {

    let arrSingle = new Map();
    let arrDouble = new Map();

    for (let i = 0; i < nums.length; i++) {
        if(!arrDouble.has(nums[i]) && arrSingle.has(nums[i])) {
            arrSingle.delete(nums[i]);
            arrDouble.set(nums[i], 1);
        } else if(!arrDouble.has(nums[i]) && !arrSingle.has(nums[i])) {
            arrSingle.set(nums[i], 1);
        }
    }

    return arrSingle.entries().next().value[0];
    
};


//Операция побитового исключающего ИЛИ (XOR)!

// 1) Каждое число nums[i] применяется к операции XOR с переменной ans
// с помощью оператора ^=

// 2) Если число nums[i] встречается в массиве только один раз, то после
// операции XOR его значение будет записано в ans

// 3) Если число nums[i] повторяется, то оно будет "отменено" в результате
// побитового исключающего ИЛИ и его значение не будет учтено в ans

//Пример [1, 2, 1]
//const value = 0
//она истина только в том случае, когда оба бита разные


//1
//0 = 0
//1 = 1

//с конца
//0 xor 1 = 1 - истина
//value = 01

//2
//    01
//2 = 10

//1 xor 0 = 1
//0 xor 1 = 1
//value = 11

//1
//    11
//1 = 01

//1 xor 1 = 0
//1 xor 0 = 1
//value = 10

//итого value = 10, что соответствует 2.
let singleNumber2 = function(nums) {
    
    let ans = 0;
        for(let i = 0; i < nums.length; i++){
            ans ^= nums[i];
        }
    return ans;
};

singleNumber([4,1,2,1,2]); //4