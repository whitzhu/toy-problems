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
