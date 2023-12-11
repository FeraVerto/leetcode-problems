// Задача: Дан массив чисел, например [1, 2, 3, 4, 5], и число k, которое представляет 
// размер окна (длину подмассива). Наша задача — найти максимальную сумму любого подмассива
// длиной k. Пусть k = 3.

let getSubarray = (array, k) => {
    let maxSum = 0;
    let currentSum = 0;

    let startIndex = 0;
    let endIndex = k - 1;
    
    for(let i = 0; i < array.length; i++) {
        
        if(i < k) {
            currentSum += array[i];
            maxSum = currentSum;
        } 

        if(i >= k && array[endIndex + 1]) {
            endIndex += 1;
            currentSum = currentSum + array[endIndex] - array[startIndex];
            
            if(currentSum > maxSum) {
                maxSum = currentSum;
            }
            startIndex += 1;
        }

    };
    return maxSum;
}

getSubarray([1, 2, 3, 4, 5], 3); //12
//           0  1  2  3  4      //index
//           1  2  3            //k



//https://leetcode.com/problems/maximum-average-subarray-i/

let findMaxAverage = function(nums, k) {
    let maxSum = 0;
    let currentSum = 0;

    let startIndex = 0;
    let endIndex = k - 1;

    for(let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    maxSum = currentSum;

    for(let i = k; i < nums.length; i++) {
        endIndex++;
        currentSum = currentSum - nums[startIndex] + nums[endIndex];
        startIndex++;

        if(currentSum > maxSum) {
            maxSum = currentSum;
        }

    }

    return maxSum / k;
};

findMaxAverage([1,12,-5,-6,50,3], 4);  //12.750000

//https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/

let countGoodSubstrings = function(s) {
    let count = 0;
    
    let startIndex = 0;
    let endIndex = 2;

    
    while(endIndex <= s.length - 1) {
        let subString = s.slice(startIndex, endIndex + 1);
        let set = new Set(subString);
        if(set.size === subString.length) {
            count++;
        }
        startIndex++;
        endIndex++;
    }

    return count;
};

countGoodSubstrings("aababcabc");

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".

//https://leetcode.com/problems/fruit-into-baskets/

// Задача: У вас есть массив чисел. Каждое число представляет "тип". Ваша задача — найти
//  самый длинный подмассив, в котором содержатся не более двух уникальных типов чисел.

// Пример:

// Допустим, у вас есть массив [1, 2, 1, 2, 3].
// В этом массиве подмассив [1, 2, 1, 2] содержит только два типа чисел (1 и 2) и является
//  самым длинным таким подмассивом. Подмассив [2, 1, 2, 3] уже содержит три разных типа 
//  чисел, что больше допустимого.

let totalFruit = function(fruits) {   

};

totalFruit([1,1,2,2,3]); //4
totalFruit([1,2,3,2,2]); //4
totalFruit([0,1,2,2]); //3