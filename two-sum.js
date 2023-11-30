//https://leetcode.com/problems/two-sum/

getTwoSum([2,7,11,15], 9);

let getTwoSum2 = (nums, target) => {
    let newMap = new Map();

    for(let i = 0; i < nums.length; i++){
        let requiredNumber = target - nums[i]
        if(!newMap.has(nums[i])) {
            newMap.set(nums[i], i);
        }

        if(newMap.has(requiredNumber)) {
            return [i, newMap.get(requiredNumber)]
        }
    }
}

getTwoSum2([2,7,11,15], 9);