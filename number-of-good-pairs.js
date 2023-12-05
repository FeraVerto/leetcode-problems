//https://leetcode.com/problems/number-of-good-pairs/

//nums[i] == nums[j] и i < j
let numIdenticalPairs = function(nums) {
    let storageOfArray = new Map();
    let result = 0;

    for(let i = 0; i < nums.length; i++) {
        if(storageOfArray.has(nums[i])) {
            storageOfArray.set(nums[i], storageOfArray.get(nums[i]) + 1)
        } else {
            storageOfArray.set(nums[i], 1);
        }
    }

    for(let value of storageOfArray.values()) {
        if(value > 1) {
            result += (value*(value - 1)) / 2;
        }
    }

    return result;
};
 //4 -  (i, j): (0,3), (0,4), (3,4), (2,5)
//потребляет память, делает лишние перерасчеты
console.log(numIdenticalPairs([1,2,3,1,1,3])); // Вернет количество хороших пар

let numIdenticalPairs2 = function(nums) {
    let storageOfArray = new Map();
    let result = 0;

    for(let num of nums) {
        if(storageOfArray.has(num)) {
            result += storageOfArray.get(num);
            storageOfArray.set(num, storageOfArray.get(num) + 1);
        } else {
            storageOfArray.set(num, 1);
        }
    }

    return result;
};
numIdenticalPairs2([1, 1, 1]);

//Например, если ваш массив nums = [1, 1, 1], то:

// Когда вы встречаете первую 1, в массиве нет других 1, с которыми можно было бы сформировать пару.
// Когда вы встречаете вторую 1, вы можете сформировать ровно одну новую пару с первой 1.
// Когда вы встречаете третью 1, вы можете сформировать две новые пары: одну с первой 1 и одну со второй 1.
// Таким образом, количество новых пар, которые можно сформировать при каждом новом вхождении 
// элемента, равно количеству его предыдущих вхождений.

// В общем случае, если элемент встречается n раз, то при n-м вхождении можно сформировать n-1 новых 
// пар. Это потому, что каждое новое вхождение элемента может образовать пару с каждым из его предыдущих вхождений.






// Чтобы подсчитать количество пар в массиве, где элементы равны и i < j, вы 
// можете использовать комбинаторную формулу количества сочетаний из n элементов 
// по 2. Если у вас есть n одинаковых элементов, количество способов выбрать 
// пару из этих элементов равно количеству сочетаний из n элементов по 2, что 

//С(n, 2) = (n * (n - 1)) / 2;
