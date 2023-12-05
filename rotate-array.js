//https://leetcode.com/problems/rotate-array/

let rotate2 = function(nums, k) {
    let partOfArray = nums.splice(nums.length - k, k)
    
    for(let i = partOfArray.length - 1; i >= 0; i--) {
        nums.unshift(partOfArray[i]);
    }
    
    return nums;
};

let rotate3 = function(nums, k) {
    let reverseArr = nums.reverse();
    let newK = k % nums.length;

    let currentEl = 0;
    let m = 1;

    for(let i = 0; i < reverseArr.length; i++) {
        currentEl = reverseArr[i];
        if(i <= Math.floor(newK / 2)) {
            reverseArr[i] = reverseArr[k - i - 1];
            reverseArr[k - i - 1] = currentEl;
        } 

        if(i >= reverseArr.length - newK - 1 && i < (reverseArr.length - newK - 1 + Math.floor((reverseArr.length - newK) / 2))) {
            reverseArr[i] = reverseArr[reverseArr.length - m];
            reverseArr[reverseArr.length - m] = currentEl;
            m++; 
        } 
     }

    return nums;
};

let rotate = (nums, k) => {
    k = k % nums.length;

    let getReversedArray = (firstIndex, lastIndex) => {
        while(firstIndex < lastIndex) {
            let currentElement = nums[firstIndex];

            nums[firstIndex] = nums[lastIndex];
            nums[lastIndex] = currentElement;
            firstIndex++;
            lastIndex--;
        }
    }

    getReversedArray(0, nums.length - 1);
    getReversedArray(0, k - 1);
    getReversedArray(k, nums.length - 1);

    return nums;
}
//7 6 5 4 3 2 1
rotate([1,2,3,4,5,6,7], 3); //[5,6,7,1,2,3,4]
rotate([-1,-100,3,99], 2); //[3,99,-1,-100]