// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const desiredNumber = target - nums[i];
        if (map.has(desiredNumber)) {
            return [map.get(desiredNumber), i];
        }
        map.set(nums[i], i);
    }
}

twoSum([2,7,11,15], 9);

//Создаем коллекцию Map - изначально он пустой, мы будем хранить там пары, 
//где key - элемент массива, value - его индекс в массиве

//Запустим цикл, где на каждой иттерации будем
    //a) из target вычитать текущий элемент массива
    //б) записывать его в desiredNumber - это число нам 
       //нужно найти среди всех остальных элементов массива
    //в) заглянем в Map, содержит ли оно этот ключ map.has(desiredNumber)
    //г) Если да, то достаем из map по ключу его значение - в данном случае индекс
       // и возвращаем массив, содержащий [value desiredNumber, i - индекс текущего элемента массива]
    //д) Если нет, то добавляем в map пару nums[i], i - теперь она хранится в map и 
       //ее можно при необходимости достать.