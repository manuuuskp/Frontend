// Stack is a data structure that works in the principle of Last-In-First-Out
// which means that the data node that entered first will be popped out last.
// eg.browser page transition and back button combo.

// Time Complexity:
// insert node - O(1)
// pop node - O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    this.size++;
    if (!this.last) {
      this.first = node;
      this.last = node;
      return this;
    }
    node.next = this.first;
    this.first = node;
    return this;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    let poppedNode = this.first;
    if (this.size === 1) {
      this.last = null;
      this.first = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    poppedNode.next = null;
    return poppedNode;
  }
}
