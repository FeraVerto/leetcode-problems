//Вычислите факториал числа

const getFactorial = (number) => {
    if(number === 1) return 1

    return number * getFactorial(number - 1)
}

getFactorial(5); //120


//Найдите наибольший общий делитель двух положительных чисел
//Алгоритм Эвклида

// Большее число поделить на меньшее.
// Меньшее число поделить на остаток, который получается после деления.
// Первый остаток поделить на второй остаток.
// Второй остаток поделить на третий и т. д.
// Деление продолжается до тех пор, пока в остатке не получится нуль. Последний делитель и есть наибольший общий делитель. 

let getNODOfTwoNumber = (a, b) => {
    if(a === b) return a;
    if(a === 0) return b
    if(b === 0) return a

    if(a > b) {
        return getNODOfTwoNumber(b, a % b);
    } else {
        return getNODOfTwoNumber(a, b % a);
    }
}

getNODOfTwoNumber(140, 96); //4

// лаконичное решение
// var gcd = function(a, b) {
//     if ( ! b) {
//         return a;
//     }

//     return gcd(b, a % b);
// };

//3. Получите целые числа в диапазоне
let getInteger = (a, b) => {
    if( a === b - 1 ) return [];
    a++;
    return [a, ...getInteger(a, b)]
    // for(let i = a + 1; i < b; i++) {
    //     numberList.push(i);
    // }
}

getInteger(10, 18);

//4. Вычислите сумму массива целых чисел

let getSum = (array) => {
    if(array.length === 0) return 0;
    return array.pop() + getSum(array);
}

getSum([2, 3, 4, 5, 6, 7]); //27

//5. Вычислите экспоненту числа

const getExponent = (n, degree) => {
    if(degree === 0) return 1
    return n * getExponent(n, degree - 1);
}
getExponent(8, 2);

//6. Получить первые n чисел Фибоначчи

const getFib = (n) => {
    if(n <= 1) return [0]
    if(n === 2) return [0, 1]
    if(n > 2) {
        let fib = getFib(n - 1);
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        return fib;
    }
}

getFib(7); //0, 1, 1, 2, 3, 5, 8,

//7. Проверьте, четное число или нет

const fn = (num) => {
    return num % 2 === 0 || num === 0 ? 'четное' : 'нечетное'
}

fn(8);

//8. Двоичный поиск с использованием рекурсии

const binarySearch = (array, num, left = 0, right = array.length - 1) => {                          
    if(left > right) return -1;

    let midElement = Math.floor((left + right) / 2);

    if(array[midElement] === num) {
        return midElement;
    }

    if(array[midElement] < num) {
        return binarySearch(array, num, midElement + 1, right);
    } else {
        return binarySearch(array, num, left, midElement - 1);
    }
}

binarySearch([0,1,2,3,4,5,6], 5); //5


//fib - rec

let getFibArray = (n) => {
    if(n <= 1) return [0];
    if(n === 2) return [0, 1];

    if(n > 2) {
        let currentFib = getFibArray(n - 1);
        currentFib.push(currentFib[currentFib.length - 1] + currentFib[currentFib.length - 2]);
        return currentFib;
    }
}

getFibArray(7);

//binSearch - rec

const binSearchRec = (array, n, left = 0, right = array.length - 1) => {
    if(right < left) {
        return false;
    }

    let midElement = Math.floor((left + right) / 2);

    if(array[midElement] === n) {
        return midElement;
    }

    if(array[midElement] > n) {
        return binSearchRec(array, n, left, midElement - 1);
    } else {
        return binSearchRec(array, n, midElement + 1, right);
    }
}

binSearchRec([0,1,2,4,5,6,7], 7); //6