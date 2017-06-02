function Node(val) {
  this.val = val;
  this.children = [];
}

function Tree (val) {
  this._root = new Node(val);
}

Tree.prototype.DFTraversal = function(callback) {
  (function recurse(node) {
    callback(node);
    node.children.length > 0 ? node.children.forEach( child => recurse(child)) : null;
  })(this._root)
}

Tree.prototype.BFTraversal = function(callback) {
  let queue = [this._root];
  while(queue.length > 0) {
    let currNode = queue.shift();
    callback(currNode);
    currNode.children.length > 0 ? currNode.children.forEach( child => queue.push(child)) : null;
  }
}

Tree.prototype.contains = function(target, traversal) {
  let contain = false;
  traversal.call(this, node => {
    console.log('node is', node.val);
    if (node.val === target) {
      contain = true;
      return true;
    }
  });
  return contain;
}

const tree = new Tree(1);

tree._root.children.push(new Node(2));
tree._root.children.push(new Node(3));
tree._root.children[0].children.push(new Node(4));
tree._root.children[0].children.push(new Node(5));
tree._root.children[0].children[0].children.push(new Node(6));
tree._root.children[0].children[0].children.push(new Node(7));
tree._root.children[0].children[1].children.push(new Node(8));

// tree.DFTraversal( node => console.log('val is ', node.val));
// tree.BFTraversal( node => console.log('val is ', node.val));
// tree.contains(9, Tree.prototype.BFTraversal );



