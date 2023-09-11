//https://leetcode.com/problems/palindrome-linked-list/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let isPalindrome = function(head) {
    let arr = [];

    let currentNode = head;

    while(currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }

    let newPal = arr.join();
    let revNewPal = arr.reverse().join();

    return newPal === revNewPal;
};

