class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = new Node(value);
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) return null;
        const temp = this.tail;
        const tailNode = temp.prev;
        this.tail = tailNode;
        if(this.length === 1) {
            this.head = null;
        } else {
            this.tail.next = null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const temp = this.head;
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if(this.length === 0) return null;
        const temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    set(index, value) {
        const current = this.get(index);
        if(current) {
            current.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if(index === 0) {
            return this.unshift(value);
        }
        if(index === this.length){
            return this.push(value);
        }
        const current = this.get(index);
        if(current) {
            const newNode = new Node(value);
            const temp = current.prev;
            temp.next = newNode;
            newNode.prev = temp;
            newNode.next = current;
            current.prev = newNode;
            this.length++;
            return this;
        }
        return false;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) {
            return this.shift();
        }
        if(index === this.length - 1) {
            return this.pop();
        }
        let current = this.get(index);
        const temp = current.prev;
        temp.next = current.next;
        current.next.prev = temp;
        current.next = null;
        current.prev = null;
        this.length--;
        return current;
    }

}