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