//https://habr.com/ru/companies/otus/articles/599309/

// Дан унимодальный массив, состоящий из n уникальных элементов. Будем называть массив унимодальным,
// если его элементы, стоящие до максимума, расположены в порядке возрастания, а элементы, стоящие после
// максимума, расположены в порядке убывания. Требуется предоставить алгоритм, возвращающий максимальный 
// элемент такого массива за логарифмическое O(log n) время.

// пример массива [1, 2, 3, 4, 5, 3, 1, 0];

const getMaxNumber = (array, left = 0, right = array.length - 1) => {
    if(right < left) return null;
    if(left === right) return array[left];
    if(right - left === 1) {
        if(array[left] > array[right]){
            return array[left]
        } else {
            return array[right]
        }
    }

    let midIndex = Math.floor((right + left) / 2);
    let midElement = array[midIndex];
    let leftElement = array[midIndex - 1];
    let rightElement = array[midIndex + 1];

    if(leftElement <= midElement && midElement >= rightElement){
        return midElement;
    }

    if(leftElement <= midElement && midElement <= rightElement) {
        return getMaxNumber(array, midIndex + 1, right);
    }

    if(leftElement >= midElement && midElement >= rightElement) {
        return getMaxNumber(array, left, midIndex - 1);
    }

    return null;
}

getMaxNumber([1, 7, 1, 7]);

//Дан неупорядоченный массив из n элементов, где n является степенью двойки.
//Требуется предоставить алгоритм, который находит второй по величине элемент массива, осуществляя 
//не более n + log_{2}{n} - 2 операций сравнения.

//[9, 18, 3, 5, 25, 1, 5, 19]

let getSecondNumber = (array) => {
    if(array.length === 2) {
        if(array[0] < array[1]) {
            return array[0];
        } else {
            return array[1];
        }
    }

    let midIndex = Math.floor(Math.random() * (array.length));

    let supportEl = array[midIndex];
    let newArrayRight = [supportEl];
    
    for(let i = 0; i < array.length; i++){
        if(supportEl < array[i]) {
            newArrayRight.push(array[i]);
        }
    }

    if(newArrayRight.length === 0 || newArrayRight.length === 1) {
        return getSecondNumber(array);
    }

    if(newArrayRight.length >= 2) {
        return getSecondNumber(newArrayRight);
    }
}

//n^2 - хреновое решение

getSecondNumber([30, 26, 23, 9, 18, 3, 5, 25, 29, 1, 21, 5, 19, 20, 24, 27, 28]);

//стратегия "Турнир"

let getSecondLargestNumber = (array) => {
    let competitors = array; // текущий список участников (начинается с полного списка)
    let losers = []; // список проигравших для текущего этапа

    // Пока у нас больше одного участника
    while (competitors.length > 1) {
        let newCompetitors = [];
        let newLosers = [];

        for (let i = 0; i < competitors.length; i += 2) {
            if (competitors[i] > competitors[i + 1]) {
                newCompetitors.push(competitors[i]);
                newLosers.push(competitors[i + 1]);
            } else {
                newCompetitors.push(competitors[i + 1]);
                newLosers.push(competitors[i]);
            }
        }

        // Обновляем списки
        competitors = newCompetitors;
        losers = losers.concat(newLosers);
    }

    // Наибольший элемент в массиве
    let max = competitors[0];

    // Теперь найдем наибольший элемент среди проигравших
    let secondMax = -Infinity;
    for (let loser of losers) {
        if (loser > secondMax) {
            secondMax = loser;
        }
    }

    return secondMax;
}

getSecondLargestNumber([9, 18, 3, 5, 25, 1, 5, 19, 31, 32]);

function secondLargest(arr) {
    function findMaxAndComp(low, high, arr) {
        if (low >= high) {
            return { max: arr[low], comparisons: [] };
        }

        const mid = Math.floor((high + low) / 2);
        const { max: x, comparisons: lstX } = findMaxAndComp(low, mid, arr);
        const { max: y, comparisons: lstY } = findMaxAndComp(mid + 1, high, arr);
        
        if (x > y) {
            lstX.push(y);
            console.log('maxX, lstX', { max: x, comparisons: lstX } );
            return { max: x, comparisons: lstX };
        } else {
            lstY.push(x);
            console.log('maxY, lstY', { max: y, comparisons: lstY } );
            return { max: y, comparisons: lstY };
        }
    }

    const { comparisons } = findMaxAndComp(0, arr.length - 1, arr);
    return findMaxAndComp(0, comparisons.length - 1, comparisons).max;
}

// Пример использования:
const arr = [5, 3, 8, 1, 6, 7, 2, 4];
console.log(secondLargest(arr));  // Ожидаем 7, так как это второе по величине число в массиве.
