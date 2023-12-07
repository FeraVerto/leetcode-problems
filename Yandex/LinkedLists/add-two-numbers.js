//https://leetcode.com/problems/add-two-numbers/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let addTwoNumbers = function(l1, l2) {
    let sum = new ListNode();
    let list1 = l1;
    let list2 = l2;
    let res = 0;    //number

    while(list1.next != null || list2.next != null) {
        let sum = list1.val + list2.val + res;
        if(sum < 10) {
            sum.next = new ListNode(sum, null);
            res = 0;
            list1 = list1.next;
        } else {
            res = Math.floor(sum / 10);
            sum.next = new ListNode(sum % 10, null);
            list2 = list2.next;
        }
    }

    return sum;
};

addTwoNumbers([2,4,3], [5,6,4]);

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.