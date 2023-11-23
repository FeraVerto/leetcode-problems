//https://leetcode.com/problems/merge-sorted-array/

let merge = function(nums1, m, nums2, n) {
    if(nums1.length > m) {
        nums1.length = m;
    }
    
    if(nums2.length > n) {
        nums2.length = n;
    }

    let nums1Index = 0;
    let nums2Index = 0;

    while(nums1Index < nums1.length && nums2Index < nums2.length) {
        if(nums1[nums1Index] < nums2[nums2Index]) {
            nums1Index++;
        } else {
            nums1.splice(nums1Index, 0, nums2[nums2Index]);
            nums1Index++;
            nums2Index++;
        }
    }

    let restNum2Array = nums2.slice(nums2Index);

    for(let i = 0; i < restNum2Array.length; i++) {
        nums1.push(restNum2Array[i]);
    }

    return nums1;
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3);