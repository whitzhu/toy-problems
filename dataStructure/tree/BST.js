function BSTNode(value) {
  this.value = value;
  this.leftChild = null; 
  this.rightChild = null; 
}

function binarySearchTree() {
  this._root = null;
}

//Pre-order traversal visits the current node before its child nodes (hence the name "pre-order").
//In a pre-order traversal, the root is always the first node visited.
binarySearchTree.prototype.preOrderTraversal = function(callback) {
  function recurse(currNode) {
    callback(currNode);
    currNode.leftChild !== null ? recurse(currNode.leftChild) : null;
    currNode.rightChild !== null ? recurse(currNode.rightChild) : null;
  }
  recurse(this._root);
}

//In-order traversal means to "visit" (o en, print) the left branch, then the current node, 
//and finally, the right branch.
//It visits the nodes in ascending order (hence the name"in-order").
binarySearchTree.prototype.inOrderTraversal = function(callback) {
  function recurse(currNode) {
    currNode.leftChild !== null ? recurse(currNode.leftChild) : null;
    callback(currNode);
    currNode.rightChild !== null ? recurse(currNode.rightChild) : null;
  }
  recurse(this._root);
}

//Post-order traversal visits the current node after its child nodes (hence the name"post order").
//In a post-order traversal, the root is always the last node visited.
binarySearchTree.prototype.postOrderTraversal = function(callback) {
  function recurse(currNode) {
    currNode.leftChild !== null ? recurse(currNode.leftChild) : null;
    currNode.rightChild !== null ? recurse(currNode.rightChild) : null;
    callback(currNode);
  }
  recurse(this._root);
}

binarySearchTree.prototype.BFTraversal = function(callback) {
  if (this._root === null) {
    callback({value: null})
 
    return 
  }
  let queue = [this._root];
  while (queue.length > 0) {
    let currNode = queue.shift();
    callback(currNode);
    currNode.leftChild !== null ? queue.push(currNode.leftChild) : null;
    currNode.rightChild !== null ? queue.push(currNode.rightChild) : null;
  }
}

binarySearchTree.prototype.search = function(traverseType, target, callback) {
  let found = false;
  traverseType.call(this, node => {
    if (node.value === target) {
      callback(node);
      found = true;
    }
  })
  found ? null : callback({value: null});
}

binarySearchTree.prototype.add = function( value) {
  this._root === null ? this._root = new BSTNode(value) : traverse(this._root);
  
  function traverse(currNode) {
    if (value < currNode.value && currNode.leftChild == null) currNode.leftChild = new BSTNode(value);
    else if (value > currNode.value && currNode.rightChild == null) currNode.rightChild = new BSTNode(value);
    else if (value > currNode.value && currNode.rightChild !== null) traverse(currNode.rightChild);
    else if (value < currNode.value && currNode.leftChild !== null) traverse(currNode.leftChild);
  }
}

binarySearchTree.prototype.min = function() {
  let min;
  function traverse(currNode) {
    if (currNode.leftChild === null) min = currNode.value;
    else traverse(currNode.leftChild);
  }
  traverse(this._root);
  return min;
}

binarySearchTree.prototype.max = function() {
  let max;
  function traverse(currNode) {
    if (currNode.rightChild === null) max = currNode.value;
    else traverse(currNode.rightChild);
  }
  traverse(this._root);
  return max;
}

binarySearchTree.prototype.contains = function(traverseType, target) {
  let contains = false;
  traverseType.call(this, node => node.value === target ? contains = true : null)
  return contains;
}

binarySearchTree.prototype.remove = function(target) {
  function removeNode(node, target) {
    if (node.value > target) {
      node.leftChild = node.leftChild && removeNode(node.leftChild, target);
    } else if (node.value < target) {
      node.rightChild = node.rightChild && removeNode(node.rightChild, target);
    } else if ( node.leftChild && node.rightChild) {
      node.value = findMinValue(node.rightChild);
      node.rightChild = removeNode(node.rightChild, node.value);
    } else {
      node = node.rightChild || node.leftChild;
    }
    return node;
  }
  function findMinValue(node) {
    return node.left ? findMinValue(node.left) : node.value;
  }
  removeNode(this._root, target)
}

binarySearchTree.prototype.depth = function() {
  let depth = -1;
  let right = 0; 
  let left = 0; 
  function recurse(currNode) {
    if (currNode === null) {
      return -1;
    } else if (currNode.leftChild !== null) {
      left++;
      recurse(currNode.leftChild)
    } else if (currNode.rightChild !== null) {
      right++;
      recurse(currNode.rightChild)
    }

  }
  recurse(this._root);
  return Math.max(left,right) === 0 ? depth : Math.max(left,right) + 1;
}


// BST.remove(40);
// BST.search(BST.BFTraversal, 0, node => console.log( 'FOUNDED=====', node.value));

// BST.BFTraversal( node => console.log('BFTraversal node.value is ', node.value));
// BST.preOrderTraversal( node => console.log('preOrderTraversal node.value is ', node.value));
// BST.inOrderTraversal( node => console.log('inOrderTraversal node.value is ', node.value));
// BST.postOrderTraversal( node => console.log('postOrderTraversal node.value is ', node.value));

// console.log(BST.remove(14));
// BST.postOrderTraversal( node => console.log('postOrderTraversal node.value is ', node.value));
// console.log(BST.remove(10));
// BST.postOrderTraversal( node => console.log('postOrderTraversal node.value is ', node.value));

// console.log(BST.remove(10));
// BST.postOrderTraversal( node => console.log('postOrderTraversal node.value is ', node.value));



// console.log('min is ===', BST.min());
// console.log('max is ===', BST.max());

// console.log('contains ===', BST.contains(BST.BFTraversal, 10));
// console.log('contains ===', BST.contains(BST.BFTraversal, 25));
// console.log('depth ===', BST.depth());


