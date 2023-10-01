class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);;
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return;
    }

    pop() {
        if(!this.head) return null;
        let current = this.head;
        if(current.next === null) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return current;
        }
        while(current.next !== this.tail) {
            current = current.next;
        }
        this.tail = current;
        let temp = current.next;
        this.tail.next = null;
        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
            this.length++;
            return this;
    }

    shift() {
        if(!this.head) {
            return null;
        }
        const shiftNode = this.head;
        this.head = shiftNode.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        shiftNode.next = null;
        return shiftNode;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    set(index, value) {
        if(index < 0 || index >= this.length) return false;
        let count = 0;
        let current = this.head;
        while(index !== count) {
            current = current.next;
            count++
        }
        current.value = value;
        return true;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        const newNode = new Node(value);
        if(index === 0) {
           return this.unshift(value);
        }
        if(index === this.length) {
            return this.push(value);
        }
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return null;
        if(index === 0) {
            return this.shift();
        }
        if(index === this.length-1) {
            return this.pop();
        }
        const temp = this.get(index - 1);
        const removedNode = this.get(index);
        temp.next = removedNode.next;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }

    reverse() {
        if(this.length === 0) return null;
        if(this.length === 1) return this;

        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let prev = null;
        for(let i=0; i<this.length; i++) {
            const next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }

    findMiddleNode() {
        let current = this.head;
        let middle = this.head;
        while(current && current.next) {
            current = current.next.next;
            middle = middle.next;
        }
        return middle;
    }

    hasLoop() {
        if(!this.head) return false;
        let fastNode = this.head.next;
        let slowNode = this.head;

        while(fastNode && fastNode.next) {
            if(fastNode === slowNode) return true;
            fastNode = fastNode.next.next;
            slowNode = slowNode.next;
        }
        return false;
    }

    findKthFromEnd(k) {
        if(k <= 0) return null;
        if(!this.head) return null;
        let fastPtr = this.head;
        let slowPtr = this.head;
        count = 1;
        while(fastPtr.next) {
            fastPtr = fastPtr.next;
            count++;
            if(count > k) {
                slowPtr = slowPtr.next;
            }
        }
        return slowPtr;
    }
}


// 1 -> 2

// null -> 1 -> 2
// null <- 1 2

// head 1 -> 2 -> 3 -> 4 -> 5 -> null tail
// head 1 <- 2 <- 3 <- 4 <- 5 tail
// tail 1 <- 2 <- 3 <- 4 <- 5 head