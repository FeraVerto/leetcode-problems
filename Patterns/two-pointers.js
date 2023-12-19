//https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

// Учитывая 0-индексированный целочисленный массив nums длины n и целое число
// target, верните количество пар (i, j), в которых

// 1) 0 <= i < j < n 
// 2) nums[i] + nums[j] < target.

//brute-force
let countPairs = function(nums, target) {
    let point1 = 0;
    let point2 = nums.length - 1;
    let count = 0;
    
    
    while(point1 < nums.length - 1) {
        if(point1 === point2) {
            point1++;
            point2 = nums.length - 1;
            continue;
        }

        if((nums[point1] + nums[point2]) < target && point1 < point2) {
            count++;
        }

        point2--;
    }

    return count;

};

//2 variant
let countPairs2 = function(nums, target) {
    let sortedArray = nums.sort((a, b) => a - b);

    let leftPoint = 0;
    let rightPoint = sortedArray.length - 1;
    let count = 0;

    while(leftPoint !== rightPoint) {
        if((sortedArray[leftPoint] + sortedArray[rightPoint]) >= target) {
            rightPoint--;
        } else {
            count += (rightPoint - leftPoint);
            leftPoint++;
        }
    }

    return count;
}
//[-1, 1, 1, 2, 3];
//count = 0

//left = 0, right = 4
//-1 + 3 >= 2 => right--

//left = 0, right = 3
//-1 + 2 = 1 => left++
                            //count = 3;
//left = 1, right = 3
//1 + 2 = 3 => right--

//left = 1, right = 2
//1 + 1 = 2 => right--;


//[-7, -6, -2, -1, 2, 3, 5]
//count = 0

//left = 0, right = 6
//-7 + 5 = -2 => right--;

//left = 0, right = 5
//-7 + 3 = -4 => left++
                            //count = 5
//left = 1, right = 5
//-6 + 3 = -3 => left++
                            //count = 5 + 4 = 9

//left = 2, right = 5
//-2 + 3 = 1 => right--

//left = 2, right = 4
//-2 + 2 = 0 => right--

//left = 2, right = 3
//-2 + -1 = -3 => left++
                            //count = 9 + 1 = 10

countPairs2([-1,1,2,3,1], 2); //3
countPairs2([-6,2,5,-2,-7,-1,3], -2); //10