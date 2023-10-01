class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (
      (value < current.value && current.left) ||
      (value > current.value && current.right)
    ) {
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if (value < current.value) {
      current.left = newNode;
    } else {
      current.right = newNode;
    }
    return this;
  }

  contains(value) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  minValue() {
    if(!this.root) return null;
    let minimumValNode = this.root;
    while(minimumValNode.left) {
        minimumValNode = minimumValNode.left;
    }
    return minimumValNode;
  }

  BFS() {
    if(!this.root) return [];
    let current = this.root;
    let queue = [];
    let results = [];
    queue.push(current);
    while(queue.length > 0) {
        current = queue.shift();
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
        results.push(current);
    }
    return results;
  }

  preOrder() {
    if(!this.root) return [];
    let results = [];
    function traverse(node) {
        results.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return results;
  }

  postOrder() {
    if(!this.root) return [];
    let results = [];
    function traverse(node) {
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        results.push(node.value);
    }
    traverse(this.root);
    return results;
  }

  inOrder() {
    if(!this.root) return [];
    let results = [];
    function traverse(node) {
        if(node.left) traverse(node.left);
        results.push(node.value);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return results;
  }
}
