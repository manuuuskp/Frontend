// Doubly Linkedlist are better than SinglyLinkedList in certain aspects but it will consume more memory
// compared to SinglyLinkedList as prev node should also be referenced.

// Time complexity:
// Insertion:
// At the beginning : O(1)
// At the end : O(1)
// At the middle : O(n) - as we need to traverse to the position. otherwise insertion is always O(1)

// Deletion:
// At the beginning : O(1)
// At the end : O(1)
// At the middle : O(n)

// Searching: O(n)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  get(pos) {
    let count = 0;
    if (pos < 0 || pos >= this.length) {
      return null;
    }
    if (pos < Math.floor(this.length / 2)) {
      let current = this.head;
      while (pos > count) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let current = this.tail;
      let tailCount = this.length - 1 - pos;
      while (count < tailCount) {
        current = current.prev;
        count++;
      }
      return current;
    }
  }

  set(val, pos) {
    const node = this.get(pos);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }

  insert(val, pos) {
    const iNode = new Node(val);
    if (pos === 0) {
      iNode.next = this.head;
      this.head = iNode;
      return this;
    }
    const node = this.get(pos - 1);
    if (node) {
      iNode.next = node.next;
      node.next.prev = iNode;
      node.next = iNode;
      iNode.prev = node;
      return this;
    }
    return null;
  }
}
