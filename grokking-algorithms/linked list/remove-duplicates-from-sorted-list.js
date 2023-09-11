//https://leetcode.com/problems/remove-duplicates-from-sorted-list/

let deleteDuplicates = function(head) {
    if(!head) return null;

    if(head.next === null) return head;

    let currentValue = head.val;
    let currentNode = head;

    while(currentNode.next){
        if(currentNode.next && currentNode.next.val === currentValue){
            currentNode.next = currentNode?.next.next;
        } else {
            currentValue = currentNode?.next.val;
            currentNode = currentNode?.next;
        }
    }

    return head;
};