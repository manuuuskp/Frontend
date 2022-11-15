// Singlylinkedlist are datastructures which is good in insertion at beginning and ending and
// deletion at the beginning. It will be an alternative for Arrays in the mentioned scenario.

// Time complexity:
// Insertion:
// At the beginning : O(1)
// At the end : O(1)
// At the middle : O(n) - insertion is always O(1) but need to navigate to the position.

// Removal:
// At the beginning : O(1)
// At the end : O(n) -  as we need to set the tail(last) element.
// At the middle : O(n)

// Searching: O(n)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //add a value
  push(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //get a value at a given position
  get(pos) {
    if (this.length < 1 || pos >= this.length || pos < 0) {
      return null;
    }
    let count = 0;
    let node = this.head;
    while (count < pos) {
      node = node.next;
      count++;
    }
    return node;
  }

  //modify a value at a given position
  set(val, pos) {
    const node = this.get(pos);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }

  //insert a value a given position
  insert(val, pos) {
    const node = new Node(val);
    if (pos === 0) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    const prevNode = this.get(pos - 1);
    if (prevNode) {
      node.next = prevNode.next;
      prevNode.next = node;
      this.length++;
      return this;
    }
    return null;
  }

  //reverse the linkedlist
  reverse() {
    if (this.length <= 1) return this;

    // 1 -> 2 -> 3 -> 4 -> 5 -> null into null <- 1 <- 2 <- 3 <- 4 <- 5

    let pre = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = pre;
      pre = current;
      current = next;
    }
    this.tail = this.head;
    this.head = pre;
  }
}
