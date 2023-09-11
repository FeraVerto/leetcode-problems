class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if(!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next =  newNode;
        this.tail = newNode;

        return this;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;

        if(!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    find(value) {

        if(!this.head) {
            return null;
        }

        const currentNode = this.head;

        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    delete(value) {
        if(!this.head) {
            return null;
        }

        let deletedNode = null;

        while(this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if(currentNode !== null) {
            while(currentNode.next) {
                if(currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if(this.tail?.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;

        while(currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString() {
        return this.toArray().map(node => node.toString()).toString();
    }
}

module.exports = { LinkedList };

class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = (next === undefined ? null : next)
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newNode = new ListNode(value);

        if(!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode; 
        this.size++;

        return this;
    }

    prepend(value) {
         let newNode = new ListNode(value);

         if(!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.head.next = this.head;
        this.head = newNode;
        this.size++;

        return this;
    }

    toArray () {
        let arr = [];

        let currentNode = this.head;
        while(currentNode.next !== null){
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }

        return arr;
    } 
}

let aaa = new LinkedList();
aaa.append('a').append('b').prepend('c');
console.log(aaa.toArray());