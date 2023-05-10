//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

let sortedArrayToBST = function(nums) {
    if(!nums.length) return null

    let middleElement = Math.floor(nums.length / 2);

    let root = new TreeNode(nums[middleElement])
    root.left = sortedArrayToBST(nums.slice(0, middleElement))
    root.right = sortedArrayToBST(nums.slice(middleElement + 1))
};

sortedArrayToBST([-10,-3,0,5,9])