// Queues are Data structures which follows the principle of First-In-First-Out
// which means the data node that enters queues first will be popped out first.
// eg.Printer request algo, Network Request

// Time Complexity:
// insert node - O(1)
// pop node - O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    this.size++;
    if (!this.last) {
      this.first = node;
      this.last = node;
      return this;
    }
    this.last.next = node;
    this.last = this.last.next;
    return this;
  }

  dequeue() {
    if (this.size === 0) return null;

    let deQueuedNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    deQueuedNode.next = null;
    return deQueuedNode;
  }
}
