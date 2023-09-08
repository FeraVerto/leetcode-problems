    class ListNode {
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }

    class LinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
        }

        toArray() {
            if(!this.head) {
                return null;
            }

            let arr = [];
            let currentNode = this.head;

            while(currentNode) {
                arr.push(currentNode.value);
                currentNode = currentNode.next;
            }

            return arr;
        }

        append (value) {
            let newNode = new ListNode(value);

            if(!this.head || !this.tail) {
                this.head = newNode;
                this.tail = newNode;
            }

            this.tail.next = newNode;
            this.tail = newNode;

            return this;
        }

        prepend(value) {
            let newNode = new ListNode(value, this.head);

            if(!this.head || !this.tail) {
                this.head = newNode;
                this.tail = newNode;
            }

            this.head = newNode;

            return this;

        }

        find(value) {
          if(!this.head) {
            return null;
          }  

          let currentNode = this.head;

          while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
          }

          return false;
        }

        delete(value) {
            if(!this.head) {
                return null;
            }

            let currentNode = this.head;

            if(this.head.value === value) {
                this.head = currentNode.next;
            }

            if(currentNode !== null) {
                while(currentNode.next) {
                    if(currentNode.next.value === value) {
                        currentNode.next = currentNode.next.next;
                    } else {
                        currentNode = currentNode.next;
                    }
                }
            }
            
            if(this.tail?.value === value) {
                this.tail = currentNode;
            }

            return this;
        }

        reverse() {
            // Reverse - метод, создающий обратный список, сменой узлов местами.
            // Первый узел становится последним, а последний первым, все узлы и 
            // их ссылки меняются соответственно.

            if(!this.head) {
                return null;
            }

            let currentNode = this.head;
            let prevNode = null;
            let nextNode = null;


            while(currentNode) {
                //prev  next   curr    
                //null  null    1 -> 2 -> 3 -> 4 -> null
                nextNode = currentNode.next;
                //nextNode = 2 -> 3 -> 4 -> null

                currentNode.next = prevNode;
                //prev   curr   next
                //null <- 1      2 -> 3 -> 4 -> null 
                prevNode = currentNode;
                //       prev   curr   next
                //null <- 1
                currentNode = nextNode;
                //       prev   curr next
                //null <- 1      2 -> 3 -> 4 -> null
            }

            this.tail = this.head;
            this.head = prevNode;

            return this;
        }
    }

    let linkedList = new LinkedList();
    let newList = linkedList.append('a').append('b').append('c').append('d').reverse().toArray();
    console.log('newList', newList);
