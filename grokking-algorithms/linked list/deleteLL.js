//https://leetcode.com/problems/remove-linked-list-elements/

let removeElements = function(head, val) {
    if(!head) {
        return null;
    }

    while(head !== null && head.val === val) {
        head = head.next;
    }
    
    let currentNode = head;


    if(currentNode !== null) {
        while(currentNode.next) {
            if(currentNode.next.val === val) {
                currentNode.next = currentNode.next.next;

            } else {
                currentNode = currentNode.next;
            }
        }
    }

    return head;
};