//https://leetcode.com/problems/majority-element/

let majorityElement = function(nums) {

    let majorityElement = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(count === 0) {
            majorityElement = nums[i];
        }

        if(nums[i] === majorityElement) {
            count++;
        } else {
            count--;
        }
    }

    count = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === majorityElement){
            count++;
        };
    }

    return count > nums.length / 2 ? majorityElement : null;
};

//Алгоритм большинства голосов Бойера — Мура
//это алгоритм для нахождения преобладающего элемента последовательности. 
//Преобладающим элементом последовательности длины n называется такой элемент
//этой последовательности, который встречается в ней более чем n/2 раз. 
//Сложность данного алгоритма O(n), а требуемая дополнительная память — O(1).

majorityElement([1, 2, 3, 4, 5, 7, 8, 5])//null
majorityElement([2,2,1,1]); //null
majorityElement([2,2,1,1,1,2,2]); //2

