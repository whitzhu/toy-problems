const assert = chai.assert;
const expect = chai.expect;

describe('stack', () => {
  let stack = new Stack();

  it('reports a size of zero for a new stack', () => {
    expect(stack.size()).to.equal(0);
  })

  it('reports a size of 2 after adding two items', () => {
    stack.push('a');
    stack.push('b');
    expect(stack.size()).to.equal(2);
  })

  it('does not error when removing from an empty stack', () => {
    stack.pop();
    expect(() => { stack.pop();}).not.throws();
  })

  it('reports a size of 1 after adding two items and removing one', () => {
    stack.push('a');
    stack.push('b');
    stack.pop();
    expect(stack.size()).to.equal(1);
  })

  it('reports a size of 0 after adding removing more items than were added', () => {
    stack.push('a');
    stack.pop();
    stack.pop();
    expect(stack.size()).to.equal(0);
  })

  it('sequentially add and remove items', () => {
    stack.push('a');
    expect(stack.pop()).to.equal('a');    
    stack.push('b');
    expect(stack.pop()).to.equal('b');
  })  

  it('removes the newest item, after newer items have already been added and removed ', () => {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    expect(stack.pop()).to.equal('b');
  })
})

describe('queue', () => {
  let queue = new Queue();

  it('reports a size of zero for a new queue', () => {
    expect(queue.size()).to.equal(0);
  })  


  it('reports a size of 1 after adding two items and removing one', () => {
    queue.enqueue('hello');
    queue.enqueue('world');
    queue.dequeue();
    expect(queue.size()).to.equal(1);
    queue.dequeue(); //empty queue
  })

  it('does not error when removing from an empty queue', () => {
    expect(() => { queue.dequeue();}).not.throws();
  })  

  it('report a size of 0 after removing more items than were added', () => {
    queue.enqueue('a');
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).to.equal(0);
  })

  it('allow sequentially adding and removing items', () => {
    queue.enqueue('a');
    expect(queue.dequeue()).to.equal('a');
    queue.enqueue('b');
    expect(queue.dequeue()).to.equal('b');
  })

  it('removes the least recently added of two items', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).to.equal('a');
    queue.dequeue(); //empty queue
  })

  it('removes the oldest item, after newer items have already been added and removed', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.enqueue('c');
    expect(queue.dequeue()).to.equal('b');
  })
})

describe('tree', () => {
  describe('basic tree', () => {
    let tree = new Tree(1);
    it('has root value of 1', () => {
      expect(tree._root.val).to.equal(1);
    })
    it('new node is added to root children array ', () => {
      tree._root.children.push(new TreeNode(2));
      expect(tree._root.children).to.deep.equal([ { val: 2, children: [] } ]);
    })  
    it('additional node is added to root children array ', () => {
      tree._root.children.push(new TreeNode(3));
      expect(tree._root.children).to.deep.equal([ { val: 2, children: [] }, { val: 3, children: [] } ]);
    })
    it('add nodes deep to third layer of tree', () => {
      tree._root.children[0].children.push(new TreeNode(4));
      tree._root.children[0].children.push(new TreeNode(5));
      expect(tree._root.children[0]).to.deep.equal({ val: 2, children:[ { val: 4, children: [] }, { val: 5, children: [] } ]})
    })
    it('add nodes deep to fourth layer of tree', () => {
      tree._root.children[0].children[0].children.push(new TreeNode(6));
      tree._root.children[0].children[0].children.push(new TreeNode(7));
      expect(tree._root.children[0].children[0]).to.deep.equal({ val: 4, children:[ { val: 6, children: [] }, { val: 7, children: [] } ]})
    })
    it('add nodes deep to fourth layer of tree', () => {
      tree._root.children[0].children[1].children.push(new TreeNode(8));
      expect(tree._root.children[0].children[1]).to.deep.equal({ val: 5, children:[ { val: 8, children: [] }]})
    })
    it('traverse tree depth first', () => {
      let result = [];
      tree.DFTraversal( node => result.push(node.val));
      expect(result).to.deep.equal([1, 2, 4, 6, 7, 5, 8, 3])
    })
    it('traverse tree breath first', () => {
      let result = [];
      tree.BFTraversal( node => result.push(node.val));
      expect(result).to.deep.equal( [ 1, 2, 3, 4, 5, 6, 7, 8 ])
    })
    it('returns false when target value is not contained in tree', () => {
      expect(tree.contains(9, Tree.prototype.BFTraversal)).to.equal(false);
    })  
    it('returns true when target value is contained in tree', () => {
      expect(tree.contains(4, Tree.prototype.BFTraversal)).to.equal(true);
    })
    xit('returns removed node value', () => {
      expect(tree.remove(7, Tree.prototype.BFTraversal)).to.equal(7);
    })
  })

  describe('binary search tree', () => {
    const BST = new binarySearchTree() 

    it('adding node to empty tree creates root node', () => {
      BST.add(15);
      expect(BST._root.value).to.equal(15);
    })
    it('adds new BSTNodes appropriately', () => {
      BST.add(10);
      BST.add(20);
      BST.add(8);
      BST.add(14);
      BST.add(17);
      BST.add(25);
      expect(BST._root.leftChild.rightChild.value).to.equal(14);
    })
    describe('traversal', () => {
      it('traverse through BST in pre-order', () => {
        let result = [];
        BST.preOrderTraversal( node => result.push(node.value));
        expect(result).to.deep.equal([15, 10, 8, 14, 20, 17, 25]);
      })    
      it('traverse through BST in in-order', () => {
        let result = [];
        BST.inOrderTraversal( node => result.push(node.value));
        expect(result).to.deep.equal([8, 10, 14, 15, 17, 20, 25]);
      }) 
      it('traverse through BST in post-order', () => {
        let result = [];
        BST.postOrderTraversal( node => result.push(node.value));
        expect(result).to.deep.equal([8, 14, 10, 17, 25, 20, 15]);
      }) 
      it('traverse through BST breath-first', () => {
        let result = [];
        BST.BFTraversal( node => result.push(node.value));
        expect(result).to.deep.equal([15, 10, 20, 8, 14, 17, 25]);
      })
    })
    describe('search', () => { 
      it('returns BST min', () => {
        expect(BST.min()).to.equal(8);
      }) 
      it('returns BST max', () => {
        expect(BST.max()).to.equal(25);
      })      
      it('returns true if target is contained in BST ', () => {
        expect(BST.contains(BST.BFTraversal, 10)).to.equal(true);
      })      
      it('returns false if target is not contained in BST ', () => {
        expect(BST.contains(BST.BFTraversal, 33)).to.equal(false);
      })
    })
    describe('removal', () => { 
      it('removes leaf nodes appropriately', () => {
        let result = [];
        BST.remove(25)
        BST.BFTraversal( node => result.push(node.value));
        expect(result).to.deep.equal([ 15, 10, 20, 8, 14, 17]);
      })
      it('removes nodes with one child appropriately', () => {
        let result = [];
        BST.remove(20)
        BST.BFTraversal( node => result.push(node.value));
        expect(result).to.deep.equal([ 15, 10, 17, 8, 14]);
      })
      it('removes nodes with two child appropriately', () => {
        let result = [];
        BST.remove(10)
        BST.BFTraversal( node => result.push(node.value));
        expect(result).to.deep.equal([ 15, 14, 17, 8]);
      })
    })
  })
})
