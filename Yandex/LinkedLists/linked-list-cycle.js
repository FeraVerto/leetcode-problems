//https://leetcode.com/problems/linked-list-cycle/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let hasCycle2 = function(head) {
    let set = new Set();
    let currentPoint = head;

    while(currentPoint !== null) {
        if(set.has(currentPoint)){
            return true
        } else {
            set.add(currentPoint);
        }
        currentPoint = currentPoint.next;
    }
    return false;
};

hasCycle2([3,2,0,-4]);

let hasCycle = function(head) {
    let slowPoint = head;
    let fastPoint = head;

    while(fastPoint !== null && fastPoint.next !== null) {
        slowPoint = slowPoint.next;
        fastPoint = fastPoint.next.next;
        if((fastPoint === slowPoint) && slowPoint.next !== null) {
            return true;
        }
    }

    return false;
};

hasCycle([1, 2]);