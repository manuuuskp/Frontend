// Trees are Datastructures that are non-linear one and has nodes with parent and child relationship.
// There are many types of trees.
// Trees will only has parent and child relationship and there will be no relationship between siblings.
// Binary Trees will have atmost two children.
// Binary Search Trees are special and is highly distinguised from Binary Trees in a way that all the children
// that are left of the parent smaller and all the children that are right to it are larger.

// Uses of trees - HTML DOM, Network router like Broadcast, multicast, Folder structure etc.

// BST Example:
//                     15
//         10                      20
// 8               12      18              25

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      this.length++;
      return this;
    }
    let current = this.root;
    let prev = null;
    while (current) {
      prev = current;
      if (val <= current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    this.length++;
    val <= prev.value ? (prev.left = node) : (prev.right = node);
    return this;
  }

  //   Breadth First Search will work across breadth of the tree.
  //   For BFS we will use a queue and check of the elements left and right and if present push it into queue.
  //   pop the queue untill there is nothing.

  BFS() {
    if (!this.root) return null;
    const queue = [this.root];
    const res = [];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      res.push(current.value);
    }
    return queue;
  }

  //Depth First Search will search with depth being the priority.
  //   It is of three types -
  //   Preorder - the order will be like parent - left node - right node
  //   PostOrder - the order will be like left node - right node - parent
  //   Inorder - the order will be like left node - parent - right node

  //   NOTE : Inorder traversal of Binary Search Tree will returned sorted value of arr;

  preOrder() {
    const data = [];
    let current = this.root;
    function traverse(current) {
      data.push(current.value);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    }
    traverse(current);
    return data;
  }

  postOrder() {
    const data = [];
    let current = this.root;
    function traverse(current) {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      data.push(current.value);
    }
    traverse(current);
    return data;
  }

  inOrder() {
    const data = [];
    let current = this.root;
    function traverse(current) {
      if (current.left) traverse(current.left);
      data.push(current.value);
      if (current.right) traverse(current.right);
    }
    traverse(current);
    return data;
  }
}
