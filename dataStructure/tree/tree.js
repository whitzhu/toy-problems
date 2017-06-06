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
    if (node.val === target) {
      contain = true;
      return true;
    }
  });
  return contain;
}