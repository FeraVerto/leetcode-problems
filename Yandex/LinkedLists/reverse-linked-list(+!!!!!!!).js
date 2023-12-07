//https://leetcode.com/problems/reverse-linked-list/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let reverseList = function(head) {
    let currentNode = head;
    let prevNode = null;
    let nextNode = null;

    while(currentNode.next !== null) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
}

reverseList([1,2,3,4,5]);