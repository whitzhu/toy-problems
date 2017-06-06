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
  let tree = new Tree(1);
  it('has root value of 1', () => {
    expect(tree._root.val).to.equal(1);
  })
  it('new node is added to root children array ', () => {
    tree._root.children.push(new Node(2));
    expect(tree._root.children).to.deep.equal([ { val: 2, children: [] } ]);
  })  
  it('additional node is added to root children array ', () => {
    tree._root.children.push(new Node(3));
    expect(tree._root.children).to.deep.equal([ { val: 2, children: [] }, { val: 3, children: [] } ]);
  })
  it('add nodes deep to third layer of tree', () => {
    tree._root.children[0].children.push(new Node(4));
    tree._root.children[0].children.push(new Node(5));
    expect(tree._root.children[0]).to.deep.equal({ val: 2, children:[ { val: 4, children: [] }, { val: 5, children: [] } ]})
  })
  it('add nodes deep to fourth layer of tree', () => {
    tree._root.children[0].children[0].children.push(new Node(6));
    tree._root.children[0].children[0].children.push(new Node(7));
    expect(tree._root.children[0].children[0]).to.deep.equal({ val: 4, children:[ { val: 6, children: [] }, { val: 7, children: [] } ]})
  })
  it('add nodes deep to fourth layer of tree', () => {
    console.log( tree._root.children[0].children[1]);
    tree._root.children[0].children[1].children.push(new Node(8));
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
