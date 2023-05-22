//https://leetcode.com/problems/same-tree/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let isSameTree = function(p, q) {
    if(p === null && q === null) {
        return true
    }

    if (p === null || q === null) {
        return false;
      }

    if(p.val !== q.val) {
    return false
    }

    const left = isSameTree(p.left, q.left) 
    const right = isSameTree(p.right, q.right)
    
    return left && right
};

isSameTree([1,2,3], [1,2,3])
isSameTree([1,2,1], [1,1,2])