//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

let sortedArrayToBST = function(nums) {
    if(!nums.length) return null

    let middleElement = Math.floor(nums.length / 2);

    let rootNode = new TreeNode(nums[middleElement])
    rootNode.left = sortedArrayToBST(nums.slice(0, middleElement))
    rootNode.right = sortedArrayToBST(nums.slice(middleElement + 1))

    console.log(rootNode);
    return rootNode
};

sortedArrayToBST([-10,-3,0,5,9])