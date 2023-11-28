let containsDuplicate = function(nums) {
    let arraySingleEl = [...new Set(nums)];

    return arraySingleEl.length !== nums.length;
};


let containsDuplicate2 = function(nums) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            return true;
        } else {
            map.set(nums[i]);
        }

    }
    return false;
}
containsDuplicate2([1,2, 3, 4]);