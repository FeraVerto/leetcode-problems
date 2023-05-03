//https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

let mergeTwoLists = function(list1, list2) {
    let sum = new ListNode();
    let current = sum;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }

        current = current.next
    }

    if(list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return sum.next
};

mergeTwoLists([1,2,3], [1, 2, 4])
//понятное объяснение https://www.youtube.com/watch?v=unlzg0nHdhY