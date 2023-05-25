//https://leetcode.com/problems/symmetric-tree/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let isSymmetric = function(root) {
    
};

isSymmetric([1,2,2,3,4,4,3]);